// const call = require("./node.js");
// const a = 625;
// const b = 645;
// console.log(call(a, b));

// ///// diffferent module ⚠️💥💥💥💥💥💥OS Modules💥💥💥💥💥💥

// const os = require("os");
// // to check the information related to the user
// const user = os.userInfo();
// console.log(user);

// // and this is more power full we can also check the uptime for the computer
// console.log(`the system is up like: ${os.uptime()}`);
// console.log(`the system is up like: ${os.tmpdir()}`);

// /// and also with we can access other information more than that

// const computerstorage = {
//   name: os.hostname(),
//   realer: os.freemem() / 100000, //this can check free memory space
//   interesting: os.version(),
// };
// console.log(computerstorage);

// ///// diffferent module ⚠️💥💥💥💥💥💥OS Modules💥💥💥💥💥💥

//this path modules can help us to find like somethings which we dont know it location

// const path = require("path");
// console.log(path.win32);

// ///// diffferent module ⚠️💥💥💥💥💥💥fS Modules💥💥💥💥💥💥

//this can help us to fetch some info

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️ and  this also is synchronous methode

// const { readFileSync, writeFileSync } = require("fs");

// /// this can help us ti fetch some file fom the forder read and read it

// const readtext = readFileSync(
//   "./complete-javascript-course/read-file/firtst.txt",
//   "utf8"
// );
// //// and also we can overrewrite or we can create other new when we dont have it
// writeFileSync(
//   "./complete-javascript-course/read-file/amakuru.txt",
//   `umukinyi wambere ni: ${readtext}`
// );
// console.log(readtext);

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️for asynchronous

//💥💥💥💥💥💥💥💥 HTTP MODULES💥💥💥💥💥💥💥💥💥💥💥💥💥💥

// const http = require("http"); //call our modules

// const sever = http.createServer((req, res) => {
//   res.write("Welcome to our first app");
//   res.end();
// });

// sever.listen(5000);

/// also we can an interesting things with node.js and create some pages with content
//create server and then create content based on user req

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home pages");
  }
  if (req.url === "/about") {
    res.end(`
        <h4>About page</h4>
        <p>are you interested</p>
        <a href='/'>click to home page</a>
        `);
  }
  res.end(`
  <h1>Oops!</h1>
  <p>This is the error page</p>
  <a href='/'> << Home page </a>
`);
});
server.listen(5000);
