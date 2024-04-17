if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("verSenha");
    var btnConfirm = document.getElementById("verConfirmSenha");

    const nome = document.getElementById("nome");
    const labelNome = document.getElementById("labelNome");

    const email = document.getElementById("email");
    const labelEmail = document.getElementById("labelEmail");

    const senha = document.getElementById("senha");
    const labelSenha = document.getElementById("labelSenha");

    const confirmSenha = document.getElementById("confirmSenha");
    const labelConfirmSenha = document.getElementById("labelConfirmSenha");

    nome.addEventListener("keyup", () => {
      if (nome.value.length <= 4 || /\d/.test(nome)) {
        labelNome.setAttribute("style", "color: red");
        nome.setAttribute("style", "border-color: red");
      } else {
        labelNome.setAttribute("style", "color: green");
        nome.setAttribute("style", "border-color: green");
      }
    });

    email.addEventListener("keyup", () => {
      if (email.value.length < 3 || !email.value.includes("@")) {
        labelEmail.setAttribute("style", "color: red");
        email.setAttribute("style", "border-color: red");
      } else {
        labelEmail.setAttribute("style", "color: green");
        email.setAttribute("style", "border-color: green");
      }
    });

    senha.addEventListener("keyup", () => {
      if (senha.value.length <= 5) {
        labelSenha.setAttribute("style", "color: red");
        senha.setAttribute("style", "border-color: red");
      } else {
        labelSenha.setAttribute("style", "color: green");
        senha.setAttribute("style", "border-color: green");
      }
    });

    confirmSenha.addEventListener("keyup", () => {
      if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute("style", "color: red");
        confirmSenha.setAttribute("style", "border-color: red");
      } else {
        labelConfirmSenha.setAttribute("style", "color: green");
        confirmSenha.setAttribute("style", "border-color: green");
      }
    });

    btn.addEventListener("click", () => {
      var inputSenha = document.getElementById("senha");

      if (inputSenha.getAttribute("type") === "password") {
        inputSenha.setAttribute("type", "text");
      } else {
        inputSenha.setAttribute("type", "password");
      }
    });

    btnConfirm.addEventListener("click", () => {
      var inputConfirmSenha = document.getElementById("confirmSenha");

      if (inputConfirmSenha.getAttribute("type") === "password") {
        inputConfirmSenha.setAttribute("type", "text");
      } else {
        inputConfirmSenha.setAttribute("type", "password");
      }
    });
  });
}
