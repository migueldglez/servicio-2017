const {ipcRenderer} = require('electron')
const remote = require('electron').remote

const path = require('path')
const url = require('url')

const change = document.getElementById('change')
const closeBrows = document.getElementById('closeBrows')
const recargar = document.getElementById('reload')
const mini = document.getElementById('minimizar')

var linkUrl = url.format({
    pathname: path.join(__dirname, 'game.html'),
    protocol: 'file:',
    slashes: true
  })

//Cierra la ventana  actual
function cerrar() {
  var win = remote.getCurrentWindow()
  win.close()
}

//Recarga la ventana actual
function reload() {
  var win = remote.getCurrentWindow()
  win.reload()
}

function minimizar() {
  var win = remote.getCurrentWindow()
  win.minimize();
}

closeBrows.onclick = cerrar
recargar.onclick = reload
mini.onclick = minimizar
//----------------------
