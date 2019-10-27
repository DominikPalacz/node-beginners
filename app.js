/*jshint esversion: 6 */
// /**
//  * To start use:
//  * node app.js */

// // const sayHello = name => console.log(`Hi ${name}`);
// // sayHello("Dominik");
// // console.log(module);

// /** Add new Module */

// /** Load module */
// const log = require("./logger");

// // console.log("module :", module);
// // console.log(logger);

// // logger.log("message Dominik");
// log("message Dominik log");


const path = require('path');

const pathObj = path.parse(__filename);

console.log('pathObj :', pathObj);
