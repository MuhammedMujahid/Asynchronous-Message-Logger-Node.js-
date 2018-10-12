const EventEmitter = require('events'); // EventEmitter class with methods
// const emitter = new EventEmitter(); //commented out since we're
//extending EventEmitter in Logger class

var url = 'http://mylogger.io/log'

//Logger class

class Logger extends EventEmitter{
 log(message){
    console.log(message);

    //raises an event
    this.emit('messageLogged', {id: 1, url: 'http://'});
  }
}

// TODO: move inside of Logger class and remove function since inside
// class you don't have to define a function
// function log(message){
//    console.log(message);
//
//    //raises an event
//    emitter.emit('messageLogged', {id: 1, url: 'http://'});
//  }

//add function log to exports (make it public)
// module.exports.log = log; // passes object of type log
// module.exports = log;      // passes function instead
module.exports = Logger;
