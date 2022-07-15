// A função require importa pacotes e guarda na constante que a gente quiser
const fs = require('fs'); 

function criarPastas() {

    // Perguntando e a database não existe
        if(! fs.existsSync('database')){

        // Criando a database
        fs.mkdirSync('database');
    }

    // Criando a pasta controller
        if(! fs.existsSync('controller')){

        fs.mkdirSync('controller');

    }

    // Criando a pasta public
    if(! fs.existsSync('public')){

        fs.mkdirSync('public');

    }

}

module.exports = criarPastas;