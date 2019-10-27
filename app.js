// // // /*jshint esversion: 6 */
// // // // /**
// // // //  * To start use:
// // // //  * node app.js */

// // // // // const sayHello = name => console.log(`Hi ${name}`);
// // // // // sayHello("Dominik");
// // // // // console.log(module);

// // // // /** Add new Module */

// // // // /** Load module */
// // // // const log = require("./logger");

// // // // // console.log("module :", module);
// // // // // console.log(logger);

// // // // // logger.log("message Dominik");
// // // // log("message Dominik log");

// // // const path = require('path');

// // // const pathObj = path.parse(__filename);

// // // console.log('pathObj :', pathObj);

// // const os = require('os');

// // const totalMemory = os.totalmem();
// // const freeMemory = os.freemem();

// // console.log('totalMemory :', totalMemory);
// // console.log('freeMemory  :', freeMemory);

// const fs = require("fs");

// // const files = fs.readdirSync("./");
// // console.log("files :", files);

// // fs.readdir("./", (err, files) => {
// //   err ? console.log("err  :", err) : console.log("files :", files);
// // });

// fs.readdir("createErr", (err, files) => {
//   err ? console.log("err  :", err) : console.log("files :", files);
// });

// CLASS
const EventEmitter = require("events");
// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();
let message = "Try some message from app.js";

// Register a listener
logger.on("messageLogged", arg => console.log("Listener called", arg)); // e, eventArg
logger.on("logging", ({ data }) => console.warn("Logging data:", data));

logger.log(message);
// // Raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://" });
// emitter.emit("logging", { data: message });

// Making a noise, produce - signalling
