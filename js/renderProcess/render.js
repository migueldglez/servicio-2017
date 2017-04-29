const {ipcRenderer} = require('electron')
const path = require('path')
const url = require('url')


var linkUrl = url.format({
    pathname: path.join(__dirname, 'game.html'),
    protocol: 'file:',
    slashes: true
  })

function cambiar() {
  console.log(linkUrl);
  ipcRenderer.send('load-page', linkUrl)
}


document.getElementById('change').onclick = cambiar

//----------------------
