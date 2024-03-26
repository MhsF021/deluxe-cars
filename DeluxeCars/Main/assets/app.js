const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const db = require("./models/db");
const User = require("./models/User");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// --------------------------- rota para INDEX ---------------------------
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// --------------------------- rota para SIGNIN / VALIDACADASTRO ---------------------------
app.get("/html/signin", (req, res) => {
  res.sendFile(__dirname + "/signin.html");
});

app.post("/html/validacadastro", async (req, res) => {
    const { user, password } = req.body;
    const vUser = await User.findOne({ where: { user } });
    if (!vUser || vUser.password !== password) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
    res.json({ message: "Login bem-sucedido" });
  });
  // res.redirect("/html/signin.html");


// --------------------------- rota para SIGNUP / CADASTRAR ---------------------------
app.get("/html", (req, res) => {
  res.sendFile(__dirname + "/signup");
});

app.post("/html/cadastrar", (req, res) => {
  User.create({
    name: req.body.nome,
    user: req.body.usuario,
    email: req.body.email,
    password: req.body.senha,
  })
    .then(function () {
      res.redirect("/html/signin.html");
    })
    .catch(function () {
      res.status(500).send("Erro ao processar o cadastro.");
    });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

module.exports = app;
