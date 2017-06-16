const {ipcRenderer} = require('electron')
const remote = require('electron').remote

const path = require('path')
const url = require('url')


$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({scrollOffset:0});

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

  $('#iniciar').on('click',function () {
    setTimeout(function () {
      $('#registro').modal('open');
    },345)
  });

  $('#subSesion').on('click',function () {
    $('#registro').modal('close');
  });

  $('#iniGame').on('click',function () {
    var linkUrl = url.format({
        pathname: path.join(__dirname,'../templates/main.html'),
        protocol: 'file:',
        slashes: true
      })

      ipcRenderer.send('load-page', linkUrl)
  })

  $('#closeGame').on('click',function () {
    var win = remote.getCurrentWindow()
    win.close()
  })

});
