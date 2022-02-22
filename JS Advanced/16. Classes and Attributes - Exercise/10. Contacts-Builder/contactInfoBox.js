class Contact {
    _online = false;

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this.div = document.createElement('div');
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        this._online
            ? this.div.classList.add('online')
            : this.div.classList.remove('online');
    }

    render(id) {
        const article = document.createElement('article');
        this.div.classList.add('title');
        this.div.textContent = `${this.firstName} ${this.lastName}`;

        const button = document.createElement('button');
        button.textContent = `\u2139`;
        button.addEventListener('click', onBtnClick);
        this.div.appendChild(button);

        article.appendChild(this.div);

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.style.display = 'none';

        const spanPhone = document.createElement('span');
        spanPhone.textContent = this.phone;
        divInfo.appendChild(spanPhone);

        const spanEmail = document.createElement('span');
        spanEmail.textContent = this.email;
        divInfo.appendChild(spanEmail);

        article.appendChild(divInfo);

        document.getElementById(id).appendChild(article);

        function onBtnClick() {
            divInfo.style.display = divInfo.style.display == 'none'
                ? 'block'
                : 'none';
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];
contacts.forEach((c) => c.render("main"));

// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 2000);