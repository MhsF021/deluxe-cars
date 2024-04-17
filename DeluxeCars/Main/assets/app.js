const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const User = require("./models/User");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "public", "views"));
app.set("view engine", "ejs");

// --------------------------- rota para INDEX ---------------------------
app.get("/",  (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/views", (req, res) => {
  res.sendFile(__dirname + "/aboutus.ejs");
});

// --------------------------- rota para SIGNIN / VALIDACADASTRO ---------------------------
app.get("/html", (req, res) => {
  res.sendFile(__dirname + "/signin.html");
});

app.post("/html/signin", (req, res) => {
  User.findOne({
    where: {
      user: req.body.usuario,
      password: req.body.senha,
    },
  })
    .then((user) => {
      if (user) {
        res.cookie("pkuser", req.body.usuario);
        // vUser = true;
        setTimeout(() => {
          res.redirect("/html/mainpage.html");
        }, 1500);
      } else if (!user) {
        res.send(`
      <script>
        alert("Usuário não encontrado. Volte e faça seu cadastro. Caso o erro persista, entre em contato com o suporte.");
      </script>
    `);
      } else {
        res.send(`
      <script>
        alert("Erro interno. Entre em contato com os dev");
      </script>
    `);
      }
    })
    .catch(() => {});
});

// --------------------------- rota para SIGNUP / CADASTRAR ---------------------------
app.get("/html", (req, res) => {
  res.sendFile(__dirname + "/signup");
});

app.post("/html/signup", (req, res) => {
  User.create({
    name: req.body.nome,
    user: req.body.usuario,
    email: req.body.email,
    password: req.body.senha,
  })
    .then(function () {
      setTimeout(() => {
        res.redirect("/html/signin.html");
      }, 3000);
    })
    .catch(function () {
      res
        .status(500)
        .send(
          "Erro ao processar o cadastro. Entre em contato com os desenvolvedores."
        );
    });
});

// --------------------------- rota para perfil / SAVE and DELETE ---------------------------
app.get("/views", (req, res) => {
  res.sendFile(__dirname + "/perfil.ejs");
});

app.post("/views/perfil", (req, res) => {
  const pkuser = req.cookies.pkuser;
  if (pkuser) {
    User.findOne({ where: { user: pkuser } })
      .then((user) => {
        if (user) {
          res.render("perfil", { user: user });
        } else {
          console.log(error);
        }
      })
      .catch((error) => {
        console.error(error);
        console.log(error);
        res.status(500).send("Erro interno do servidor");
      });
  } else {
    console.log("Nome de usuário não encontrado nos cookies");
    res.send(`
    <script>
      alert("Nome de usuário não encontrado. Por favor, faça o login novamente.");
    </script>
  `);
  }
});

app.post("/views/saveUserData", async (req, res) => {
  const pkuser = req.cookies.pkuser;
  if (!pkuser) {
    return res.status(400).send(`
          <script>
              alert("Nome de usuário não encontrado. Por favor, faça o login novamente e insira o seu usuário correto.");
              window.location.href = "/html/signin.html";
          </script>
      `);
  }

  try {
    const user = await User.findOne({ where: { user: pkuser } });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    user.name = req.body.nome;
    user.email = req.body.email;
    user.password = req.body.senha;

    await user.save();

    setTimeout(() => {
      res.redirect("/html/signin.html");
    }, 1500);
  } catch (error) {
    console.error("Erro ao atualizar dados do usuário:", error);
    res.status(500).json({ message: "Erro ao atualizar dados do usuário" });
  }
});

app.post("/views/deleteUserData", async (req, res) => {
  const pkuser = req.cookies.pkuser;
  if (!pkuser) {
      return res.status(400).send(`
          <script>
              alert("Nome de usuário não encontrado. Por favor, faça o login novamente.");
              window.location.href = "/html/signin.html";
          </script>
      `);
  }
  try {
      const user = await User.findOne({ where: { user: pkuser } });
      if (!user) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      await user.destroy();
      setTimeout(() => {
        res.redirect("/html/signin.html");
      }, 1500);
  } catch (error) {
      console.error('Erro ao excluir dados do usuário:', error);
      res.status(500).json({ message: 'Erro ao excluir dados do usuário' });
  }
});

// --------------------------- rota PRINCIPAL ---------------------------
app.listen(8080, () => {
  console.log("http://localhost:8080");
});

module.exports = app;
