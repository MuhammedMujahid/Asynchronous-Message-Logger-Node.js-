const EventEmitter = require('events'); // EventEmitter class with methods
const emitter = new EventEmitter();
// Listens to EventEmitter
emitter.on('messageLogged', function(eventArg){
  console.log('Listener Called', eventArg);
});

// emitter raises an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

const fs = require('fs');
const files = fs.readdirSync('./')
console.log(files);
// syncrhonous method
fs.readdir('./', function(err,files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

// to load module
// var logger = require('./logger');
// console.log(logger);
// logger('logger'); // calls function from other module
// function sayHello(name){
//   console.log('Hello' + name);
// }

//sayHello('Muhammed ');
// --MODULES
// console.log(); // global
// setTimeout(function () {
//
// }, 10); //calls function after a specified delay
// avoid defining variables in global scope
// every application has o main module
// variables in a module are private by defualt, therefore to use them in another module, you must export them
// node js is a runtime environment for javascript and is used to make API's
