var url = 'http://mylogger.io/log'

function log(message){
  console.log(message);
}

//add function log to exports (make it public)
module.exports.log = log; // passes object of type log
module.exports = log;      // passes function instead
