const res = require('../js/resolucion.js');

var _siguiente =  document.getElementById('siguiente')
var _tips = document.getElementById('tips')
var _enviar = document.getElementById('enviar')
var _valor = document.getElementById('respuestas')

res.terminos.errs = 0

function mostrar() {
  console.log(_valor.value);
  if(_valor.value==0 && !_valor.value==''){
    res.pushEcuacion()
    _valor.value = ''
    res.terminos.errs = 0
    _tips.classList.add('hide')
    _siguiente.classList.add('hide')
  }else{
    res.terminos.errs = (res.terminos.errs +1)
    if(res.terminos.errs===3){
      _tips.classList.remove('hide')
    }else if(res.terminos.errs===5){
      _siguiente.classList.remove('hide')
    }
  }




}

window.onload = () => {
  res.pushEcuacion();
  document.getElementById('igual').innerHTML = "="
}

document.getElementById('siguiente').onclick = res.pushEcuacion;

_enviar.onclick = mostrar

exports.t = res.terminos
