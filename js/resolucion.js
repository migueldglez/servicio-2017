const ecuacion = require('../js/funciones.js');

var _terminos = {}

function newEcuacion(termino) {
  var ax1 = termino.m1.split(' ')
  var ax2 = termino.m2.split(' ')

  var a1 = splitEcua(ax1)
  var a2 = splitEcua(ax2)

  _terminos.x = (a1[0]-a2[0])
  _terminos.c = (a2[1]-a1[1])
}

function splitEcua(array) {
  var a = [0,0]

  for (var i = 0; i < array.length; i++) {
    if(array[i].includes("x")){
      switch (array[i]) {
        case 'x':
          a[0]++
          break;
        case '+x':
          a[0]++
          break;
        case '-x':
          a[0]--
          break;
        default:
          a[0] +=  parseInt(array[i].replace("x",""))
      }
    }else{
      a[1] += parseInt(array[i])
    }
  }

  return a
}


exports.pushEcuacion = () => {
  var n = ecuacion.ecuacion()
  _terminos.m1 = n[0]
  _terminos.m2 = n[1]
  newEcuacion(_terminos)
  document.getElementById('miembro1').innerHTML = n[0]
  document.getElementById('miembro2').innerHTML = n[1]
}



exports.terminos = _terminos;
