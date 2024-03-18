const express = require ('express'); // express (gerencia rotas)
const app = express ();
const bodyParser = require('body-parser');
const db = require('./models/db')
const User = require ('./models/User')
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html")
// });


// app.post("./html/cadastrar", async function  (req, res) => {
// 	res.send("Página cadastrar");
// 	});

app.post('/cadastrar', async function (req,res){
    User.create({
        nome: req.body.labelNome,
        usuario: req.body.labelUsuario,
        email: req.body.labelEmail,
        senha: req.body.labelSenha

    }).then(function(){
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

    }).catch(function(erro){
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    })
    });
    



app.listen (8080, () => {
	console.log("http://localhost:8080");
	
	});
