const res = require('../js/resolucion.js');
const puzzle = require('../js/puzzle.js')

var _siguiente =  document.getElementById('siguiente')
var _tips = document.getElementById('tips')
var _enviar = document.getElementById('enviar')
var _valor = document.getElementById('respuestas')
var _resueltas = document.getElementById('resueltas')
var _score = document.getElementById('score')
var _intentos = document.getElementById('intentos')
var _icono = document.getElementById('bien')
var _efecto = document.getElementById('efecto')

res.terminos.errs = 0
res.terminos.goods = 0
res.terminos.global = 0
res.terminos.score = 0

//mustra los botones siguiente y tips de acuerdo al numero
//de errores
function mostrar() {
  if(_valor.value==0 && !_valor.value==''){
    iconAnimation(1)
    res.pushEcuacion()
    _valor.value = ''
    res.terminos.errs = 0
    _tips.classList.add('hide')
    _siguiente.classList.add('hide')
    res.terminos.goods++
    res.terminos.global++
    res.terminos.score+=100
    _resueltas.innerHTML = res.terminos.global
    _score.innerHTML = res.terminos.score + ' Exp'
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
    _intentos.innerHTML = puzzle._ban.intent
  }else{
    iconAnimation(0)
    if(res.terminos.score>0)res.terminos.score-=50
    _score.innerHTML = res.terminos.score + ' Exp'
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

//Animacion y efecto de sonidos de los iconos al cometer errores o al acertar
function iconAnimation(num) {
  var icono = (num==1) ? 'done' : 'not_interested'
  var bien = ['green-text', 'text-darken-4']
  var mal = ['red-text', 'text-darken-4']
  var clases = (num==1) ? bien : mal
  var a_src = (num==1) ? '../effects/Correct-answer.mp3' : '../effects/Wrong-answer-sound-effect.mp3'


  _icono.innerHTML = icono
  for (i of clases) {
    _icono.classList.add(i)
  }
  _efecto.src = a_src
  _efecto.volume = .3
  _efecto.play()

  _icono.classList.remove('hide')

  setTimeout(function () {
    _icono.classList.add('hide')
    for (i of clases) {
      _icono.classList.remove(i)
    }
  }, 1000);


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
