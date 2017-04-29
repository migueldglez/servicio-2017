/*
*    Genera una ecuacion  con un maximo de 4 terminos
*    aleatoriamente en cada miembro, entre terminos
*    independientes y dependientes
*/


var operFirst = ['','-']
var operLast = ['+','-']
var ecuacionFinal

//Regresa un numero aleatorio del 0 al 1
//que sirve para definir el tipo de operador
function tipoNum(){
  return Math.floor(Math.floor(Math.random() * 2));
}

//Regresa un numero aleatorio del 1 al 4
//define la cantidad de terminos de un miembro
function cantTerminos() {
  return Math.floor(Math.random() * 4) + 1;
}

//Regresa un numero aleatorio del 1 al 10 que
//define el coeficiente de termino dependiente
//o un termino independiente
function coefiNum(){
  return Math.floor(Math.random() * 10) + 1;
}

//Regresa el termino generado aleatoriamente
function termino(tipo) {
  var term;

  if(tipo==0){
    var c = coefiNum();

    if (c==1) {
      term = 'x'
    }
    else {
      term = c + 'x'
    }

  }
  else{
    term = coefiNum()
  }

  return term;
}

//Regresa un miembro con terminos aleatorios,
//con un maximo de 4 y un minimo de 1, con terminos
// dependientes e independientes
function miembro() {
  var miembro
  for (var i = 0; i < cantTerminos(); i++) {
    if(i===0){
      miembro = operFirst[tipoNum()]+termino(tipoNum());
    }else{
      miembro += ' ' + operLast[tipoNum()]+termino(tipoNum());
    }
  }

  return miembro
}

//Regresa verdadero, si un miembro contiene
//solamente terminos dependientes
function allContX(array) {
  var flag = true

  for (var i = 0; i < array.length; i++) {
    if(!isNaN(array[i])){
      flag =false;
      break;
    }
  }

  return flag;
}

//Regresa verdadero, si un miembro contiene
//solamente terminos independientes
function allContNumber(arreglo) {
  var flag = true
  for (var i = 0; i < arreglo.length; i++) {
    if(isNaN(arreglo[i])){
      flag =false;
      break;
    }
  }

  return flag;
}

//Regresa array con  una ecuacion aleatorio, asegurandose
//que ningun miembro sea totalmente de un tipoNum
//determinado de terminos
exports.ecuacion =  () =>{
  var miembros = [miembro(),miembro()]
  var arr1 = miembros[0].split(' ')
  var arr2 = miembros[1].split(' ')
  var flag1 = allContX(arr1) && allContX(arr2)
  var flag2 = allContNumber(arr2) && allContNumber(arr2)

  while (flag1 || flag2) {
    miembros[0] = miembro()
    miembros[1] = miembro()
    arr1 = miembros[0].split(' ')
    arr2 = miembros[1].split(' ')
    flag1 = allContX(arr1) && allContX(arr2)
    flag2 = allContNumber(arr2) && allContNumber(arr2)
  }

  return miembros

}
