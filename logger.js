/** Creating a Module */

const url = "http://myLogger.io/log";

const log = message => {
  // Send an HTTP request
  console.log(message);
};

// module.exports.log = log; // object
module.exports = log; // single function

// module.exports.endPoint = url; // ! Keep the URL private!


