var _siguiente =  document.getElementById('siguiente')
var _tips = document.getElementById('tips')
var _enviar = document.getElementById('enviar')


function mostrar() {

  _siguiente.classList.remove('hide')
  _tips.classList.remove('hide')
}

_enviar.onclick = mostrar
