const btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  const inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  const usuario = document.getElementById('usuario')
  const userLabel = document.getElementById('userLabel')
  
  const senha = document.getElementById('senha')
  const senhaLabel = document.getElementById('senhaLabel')
  
  const msgError = document.getElementById('msgError')
  const listaUser = []
  
  const userValid = {
    user: '',
    password: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    try {
      
      res.redirect('/signin.html')

    } catch (error) {
      
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuário ou senha incorretos'
      usuario.focus()
      
    
    const mathRandom = Math.random().toString(16).substr(2)
    const token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  }  
  
  
}

}