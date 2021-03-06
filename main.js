const electron = require('electron')
const {app, BrowserWindow} = electron
const $ = jQuery = require('jquery')
const path = require('path')
const url = require('url')
const {ipcMain} = require('electron')
const os = require('os');
const setSett = require('./modulos/setSettings.js');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow (width,height) {

  //Si el OS es Windows, Crea una ventana sin marco
  var flag = (os.platform()==='win32')?false:true

  win = new BrowserWindow({
    width:width,
    height: height,
    autoHideMenuBar:true,
    backgroundColor:'#FFFFFFFF',
    icon: path.join(__dirname, 'icon/64x64.png'),
    show:false,
    frame: flag
  })
  //maximiza la ventana
  win.setResizable(false);

  win.once('ready-to-show', () => {
    win.show()
  })
  //win.setMenu(null); Quita el menu por default

  // and load the index.html of the app.
  win.loadURL(url.format({
    //__dirname: direccion completa de la carpeta del projecto ejem: /home/aisark/Escritorio/servicio-2017
    pathname: path.join(__dirname, 'templates/index.html'),//<----- ruta de los archivos html
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', ()=>{
  setSett()
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  createWindow(width, height)

})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})


//Enviar mensaje

ipcMain.on('load-page', (event,arg) =>{
  win.loadURL(arg)
})

//--------------------
