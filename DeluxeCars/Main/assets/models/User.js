const Sequelize = require ('sequelize');
const db = require('./db')
const User = db.define('usuarios', {
    name: {
        type:Sequelize.STRING,
        allowNull: false
    },

    user: {
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    
    email: {
        type:Sequelize.STRING,
        allowNull: false
    },
    
    password: {
        type:Sequelize.STRING,
        allowNull: false
    }
});

//Caso não exista, esse comando cria a tabela
// User.sync()

// Verifica se existem diferenças na tabela. Se existir, realiza a alteração
// User.sync({alter: true})
module.exports = User;