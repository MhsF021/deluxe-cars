const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'dcdb',
    'root',
    '123321', {
    host: 'localhost',
    dialect: 'mysql'
  });

// Verifica se a conexão está OK
//   sequelize.authenticate()
//   .then(function(){
//         console.log("Conexão realizada com sucesso.")
//   }).catch(function(){
//         console.log("Conexão sem sucesso.")
//   });

  module.exports = sequelize;