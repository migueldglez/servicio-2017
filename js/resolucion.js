const ecuacion = require('../js/funciones.js');

var _terminos = {canM1:0,canM2:0}


//Suma la cantidad de terminos independientes y dependientes de ambos mienbros de una
//funcion
function respuesta(termino) {
  var ax1 = termino.m1.split(' ')
  var ax2 = termino.m2.split(' ')

  var a1 = splitEcua(ax1)
  var a2 = splitEcua(ax2)
  _terminos.m1X = a1[0]
  _terminos.m1I = a1[1]
  _terminos.m2X = a2[0]
  _terminos.m2I = a2[1]
  _terminos.x = (a1[0]-a2[0])
  _terminos.c = (a2[1]-a1[1])
}

//Devuelve un arreglo con la suma de las x en un termino, y los terminos independientes
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
  var c1 = ecuacion.cantTerminos()
  var c2 =ecuacion.cantTerminos()
  var r1 = (_terminos.canM1===0)? c1:_terminos.canM1
  var r2 = (_terminos.canM2===0)? c2:_terminos.canM2
  var n = ecuacion.ecuacion(r1,r2)
  _terminos.m1 = n[0]
  _terminos.m2 = n[1]
  respuesta(_terminos)
  var cadena = n[0]+' '+' = '+' '+n[1]
  document.getElementById('ecuaMath').innerHTML = cadena
}

exports.terminos = _terminos;
