/** Module Wrapper Function */

// (function(exports, require, module, __filename, __dirname) {
// var x =;
/** Creating a Module */
// console.log("__filename :", __filename);
// console.log("__dirname :", __dirname);

const EventEmitter = require("events");
// const emitter = new EventEmitter();
let message = "Try some message";

const url = "http://myLogger.io/log";

class Logger extends EventEmitter {
  log = message => {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
    this.emit("logging", { data: message });
  };
}

// module.exports.log = log; // object
// module.exports = log; // single function
module.exports = Logger; // Class

// module.exports.endPoint = url; // ! Keep the URL private!
// });
