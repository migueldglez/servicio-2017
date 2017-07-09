const {ipcRenderer} = require('electron')
const remote = require('electron').remote
const path = require('path')
const url = require('url')
const noUiSlider = require('../noUiSlider/nouislider.min.js')
const wNumb = require('../noUiSlider/wNumb.js')

var slider = document.getElementById('volRange');

noUiSlider.create(slider, {
  start: 100,
  connect: [true,false],
  step: 1,
  range: {'min': 0 , 'max': 10},
  format: wNumb({decimals: 0})
})


$(document).ready(function(){

  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({scrollOffset:0});

  //Configuración de los madals
  $('#registro').modal({
    dismissible:false,
    endingTop: '15%',
    outDuration: 300,
    complete: function () {
      Materialize.showStaggeredList('#menuButtons');
      setTimeout(function () {
        $('#menuButtons').removeClass('hide')
      },100)
    }
  });
  $('#configs').modal({
    dismissible:false,
    opacity: .7,
    endingTop: '15%',
    outDuration: 300
  });
  $('#opcIni').modal({
    dismissible:false,
    opacity: .2,
    endingTop: '15%',
    outDuration: 300
  })

  //Abrir modals dinamicamente
  $('#iniciar').on('click',function () {
    setTimeout(function () {
      $('#registro').modal('open');
    },320)
  });
  $('#openConfig').on('click',function () {
    setTimeout(function () {
      $('#configs').modal('open');
    },200)
  })
  $('#iniGame').on('click',function () {
    setTimeout(function () {
      $('#opcIni').modal('open');
    },200)
  })

  //Cerrar modals dinamicamente
  $('#subSesion').on('click',function () {
    $('#registro').modal('close');
  });
  $('#closeConfig').on('click',function () {
    $('#configs').modal('close');
  });

  //Iniciar juego principal
  /*
  $('#iniGame').on('click',function () {
    var linkUrl = url.format({
        pathname: path.join(__dirname,'../templates/main.html'),
        protocol: 'file:',
        slashes: true
      })

      ipcRenderer.send('load-page', linkUrl)
  })*/

  //Cerrar aplicación
  $('#closeGame').on('click',function () {
    var win = remote.getCurrentWindow()
    win.close()
  })

});
