const storage = require('electron-storage');
const jstorage = require('electron-json-storage');
const path = require('path')
const fs = require('fs');

var object;


exports.getSettings = function (callback) {
  jstorage.get('settings',function (error,data) {
    if (error){
      callback(error);
    }
    callback(0,data)
  })
}

exports.setSettings = function (valor,callback){
  jstorage.set('settings', { volEffects: valor }, function(error) {
    if (error){
      callback(error)
    };
  });
}
