const res = require('../js/resolucion.js');
const puzzle = require('../js/puzzle.js')

var _siguiente =  document.getElementById('siguiente')
var _tips = document.getElementById('tips')
var _enviar = document.getElementById('enviar')
var _valor = document.getElementById('respuestas')

res.terminos.errs = 0
res.terminos.goods = 0
res.terminos.global = 0

//mustra los botones siguiente y tips de acuerdo al numero
//de errores
function mostrar() {
  if(_valor.value==0 && !_valor.value==''){
    res.pushEcuacion()
    _valor.value = ''
    res.terminos.errs = 0
    _tips.classList.add('hide')
    _siguiente.classList.add('hide')
    res.terminos.goods++
    res.terminos.global++
    switch (res.terminos.goods) {
      case 1:
        puzzle._ban.intent = 1
        break;
      case 2:
        puzzle._ban.intent = 2
        break;
      case 3:
        puzzle._ban.intent = 3
        break;
      default:
        puzzle._ban.intent = 4
    }

  }else{
    res.terminos.errs = (res.terminos.errs +1)
    if(res.terminos.errs===3){
      _tips.classList.remove('hide')
    }else if(res.terminos.errs===5){
      _siguiente.classList.remove('hide')
    }
  }
}

//Cuando se ingresa una respuesta valida se ocultan los botones
//siguiente y tips
function ocultar() {
  res.pushEcuacion()
  _valor.value = ''
  _tips.classList.add('hide')
  _siguiente.classList.add('hide')
  res.terminos.errs = 0
}

//Captura el evento por teclas dentro del input respuestas,
//si es ENTER lanza la funcion mostrar()
function enter(e) {
  if (e.keyCode==13){
    mostrar()
    return false
  }
}

//Al cargas la pagina game.html lanza la funcion pushEcuacion()
//y pone el simbolo igual entre los terminos
window.onload = () => {
  res.pushEcuacion();
  document.getElementById('igual').innerHTML = "="
}

//Eventos en los distintos botones
_siguiente.onclick = ocultar
_enviar.onclick = mostrar
_valor.onkeypress = enter;

//Variables y funciones exportadas
exports.t = res.terminos
