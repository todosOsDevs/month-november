//Esse obj pages vai ser separado depois por arquivos. Exemplo pages.home vai ter um arquivo skin/js/pages/home.js
pages = {
    home: {
        load: function() {
            console.log('load home');
        }
    }
}


app = {

    load:function() {
        this.pages.home();
    },

    pages: {
        home: function() {
            pages.home.load();
        },
        register: function() {
            
        },
        update: function() {

        },
        delete: function() {

        }
    }
}

$(document).ready(function() {
    app.load();
});