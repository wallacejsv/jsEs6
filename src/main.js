class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = (event) => {
            this.addRepository(event);
        }    
    }

    addRepository(event) {
        event.preventDefault();
        this.repositories.push({
            name: 'Jonathan Vieira',
            description: 'Desc',
            avatar_url: 'https://avatars1.githubusercontent.com/u/6198834?v=4',
            html_url: 'https://github.com/wallacejsv'
        });
        console.log(this.repositories);
    }
}

new App();