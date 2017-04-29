const ecuacion = require('../js/funciones.js');

function pushEcuacion() {
  var n = ecuacion.ecuacion()
  localStorage.setItem("m1",n[0]);
  localStorage.setItem("m2",n[1]);
  document.getElementById('miembro1').innerHTML = n[0]
  document.getElementById('miembro2').innerHTML = n[1]
}

window.onload = () => {
  pushEcuacion();
  document.getElementById('igual').innerHTML = "="
}

document.getElementById('siguiente').onclick = pushEcuacion;
