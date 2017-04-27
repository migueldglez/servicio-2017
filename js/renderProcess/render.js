const {ipcRenderer} = require('electron')
const path = require('path')
const url = require('url')


console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg + 'render') // prints "pong"
})

ipcRenderer.send('asynchronous-message', 'ping')

var linkUrl = url.format({
    pathname: path.join(__dirname, 'inde.html'),
    protocol: 'file:',
    slashes: true
  })

function cambiar() {
  console.log(linkUrl);
  ipcRenderer.send('load-page', linkUrl)
}


document.getElementById('change').onclick = cambiar

//----------------------
