/** Module Wrapper Function */
// (function(exports, require, module, __filename, __dirname) {
// var x =;
/** Creating a Module */
console.log("__filename :", __filename);
console.log("__dirname :", __dirname);
const url = "http://myLogger.io/log";

const log = message => {
  // Send an HTTP request
  console.log(message);
};

// module.exports.log = log; // object
module.exports = log; // single function

// module.exports.endPoint = url; // ! Keep the URL private!
// });
