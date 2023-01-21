const url = require('url');
const fs = require('fs');
const path = require('path');

function getContentType(url) {
    const extension = path.extname(url).slice(-3);
    const result = {};

    switch (extension) {
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'webp': result.content = `image/${extension}`; break;
        case 'ico': result.content = 'image/x-icon'; break;
        case 'css': result.content = 'text/css'; break;
        default:
            result.content = 'text/html';
            result.encoding = 'utf-8';
            break;
    }

    return result;
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    const format = getContentType(pathname);

    if (pathname.startsWith('/content') && req.method == 'GET') {

        fs.readFile(`./${pathname}`, format.encoding, (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('Error was found');
                res.end();
                return;
            }

            console.log(pathname);
            res.writeHead(200, {
                'Content-Type': format.content
            });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};