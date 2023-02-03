const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');
const uuid = require('uuid');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname == '/cats/add-breed' && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        const reader = fs.createReadStream(filePath);

        reader.on('data', (data) => { res.write(data); });
        reader.on('end', () => { res.end(); });
        reader.on('error', (err) => { console.log(err); });

    } else if (pathname == '/cats/add-breed' && req.method == 'POST') {
        const filePath = path.normalize(path.join(__dirname, '../data/breeds.json'));

        const form = formidable({});

        form.parse(req, (err, fields, files) => {
            console.log(fields);

            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const breeds = JSON.parse(data);
                    breeds.push(fields['breed']);

                    fs.writeFile(filePath, JSON.stringify(breeds), 'utf-8', () => {
                        console.log('The breed was uploaded successfully!');

                        res.writeHead(301, { Location: '/' });
                        res.end();
                    })
                }
            });
        });

    } else if (pathname == '/cats/add-cat' && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        const reader = fs.createReadStream(filePath);

        reader.on('data', (data) => {
            const catBreedPlaceholder = breeds.map((breed) => `<option value=${breed}>${breed}</option>`);
            data = data.toString().replace("{{catBreeds}}", catBreedPlaceholder.join(''));
            res.write(data);
        });

        reader.on('end', () => { res.end(); });
        reader.on('error', (err) => { console.log(err); });

    } else if (pathname == '/cats/add-cat' && req.method == 'POST') {
        const filePath = path.normalize(path.join(__dirname, '../data/cats.json'));

        const form = formidable({});

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            let oldPath = files.upload.filepath;
            let newPath = path.normalize(path.join(__dirname, '../content/images/' + files.upload.originalFilename));

            fs.copyFile(oldPath, newPath, (err) => {
                if (err) throw err;
                console.log('File was uploaded successfully!');
            });

            fs.readFile('./data/cats.json', (err, data) => {
                if (err) {
                    throw err;
                } else {
                    const cats = JSON.parse(data);
                    const id = uuid.v4();

                    cats.push({
                        id,
                        ...fields,
                        image: files.upload.originalFilename,
                        sheltered: false
                    });
                    
                    fs.writeFile(filePath, JSON.stringify(cats, null, 2), 'utf-8', () => {
                        console.log('The cat was uploaded successfully!');
                        res.writeHead(301, { Location: '/' });
                        res.end();
                    })
                }
            });
        });
    } else if (pathname.includes('/cats-edit') && req.method == 'GET') {
        const imagePath = (image) => path.normalize(path.join(__dirname, `../content/images/${image}`));

        const catPlaceholder = (cat) => `
        <form action="/cats-edit/${cat.id}" method="post" class="cat-form" enctype="multipart/form-data">
        <h2>Edit Cat</h2>
        <label for="name">Name</label>
        <input type="text" id="name" value="${cat.name}">
        <label for="description">Description</label>
        <textarea id="description">${cat.description}</textarea>
        <label for="image">Image</label>
        <input type="file" id="image">
        <label for="group">Breed</label>
        <select name="breed" id="group" value="{{breed}}">
            {{catBreeds}}
        </select>
        <button>Edit Cat</button>
        </form>`;

        const catBreedPlaceholder = (cat) => {
            return breeds.map((breed) => {
                if (breed == cat.breed) {
                    return `<option value=${breed} selected>${breed}</option>`
                } else {
                    return `<option value=${breed}>${breed}</option>`
                }
            }).join('');
        };

        const filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));
        const reader = fs.createReadStream(filePath);

        reader.on('data', (data) => {
            const id = url.parse(req.url).pathname.split('/')[2];
            const cat = cats.find((cat) => cat.id == id);

            data = data.toString();
            data = data.replace('{{cat}}', catPlaceholder(cat));
            data = data.replace("{{catBreeds}}", catBreedPlaceholder(cat));
            data = data.replace('{{breed}}', cat.breed);

            res.write(data);
        });

        reader.on('end', () => { res.end(); });
        reader.on('error', (err) => { console.log(err); });

    } else if (pathname.includes('/cats-edit') && req.method == 'POST') {
        const filePath = path.normalize(path.join(__dirname, '../data/cats.json'));
        const id = url.parse(req.url).pathname.split('/')[2];

        const form = formidable({ multiples: false, uploadDir: __dirname });

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    const cats = JSON.parse(data);

                    let oldPath = files.upload.filepath;
                    let newPath = path.normalize(path.join(__dirname, '../content/images/' + cats.image));

                    if (newPath !== oldPath) {
                        fs.copyFile(oldPath, newPath, (err) => {
                            if (err) throw err;
                            console.log('File was uploaded successfully!');
                        });
                    }

                    cats[id] = {
                        id,
                        ...fields,
                        image: files.upload.originalFilename,
                        sheltered: false
                    };

                    fs.writeFile(filePath, JSON.stringify(cats, null, 2), 'utf-8', () => {
                        console.log('The cat was uploaded successfully!');
                        res.writeHead(301, { Location: '/' });
                        res.end();
                    })
                }
            });


        });

    } else if (pathname.includes('/cats-find-new-home') && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/catShelter.html'));
        const reader = fs.createReadStream(filePath);

        const id = path.parse(req.url).name;
        const cat = cats.find((cat) => cat.id == id);

        const catPlaceholder = (cat) => `
        <form action="/cats-find-new-home/${cat.id}" method="post" class="cat-form">
            <h2>Shelter the cat</h2>
            <img src="${path.join('../content/images/' + cat.image)}" alt="${cat.name}">
            <label for="name">Name</label>
            <input type="text" id="name" value="${cat.name}" disabled>
            <label for="description">Description</label>
            <textarea id="description" disabled>${cat.description}</textarea>
            <label for="group">Breed</label>
            <select name="breed" id="group" disabled value="${cat.breed}">
                {{catBreeds}}
            </select>
            <button>SHELTER THE CAT</button>
        </form>`;

        const catBreedPlaceholder = breeds.map((breed) => `<option value=${breed}>${breed}</option>`);

        reader.on('data', (data) => {
            data = data.toString();
            data = data.replace('{{cat}}', catPlaceholder(cat));
            data = data.replace("{{catBreeds}}", catBreedPlaceholder.join(''));

            res.write(data);
        });

        reader.on('end', () => { res.end(); });
        reader.on('error', (err) => { console.log(err); });

    } else if (pathname.includes('/cats-find-new-home') && req.method == 'POST') {
        console.log('cats-find-new-home', 'POST');

    } else {
        return true;
    }
}