/// how we can set the time interval into node.js and after that interval loop for what it dooing
// setInterval(() => {
//   console.log("hello wword");
// }, 1000);

// //set timeout also can only wait for that time to do some action
// setTimeout(() => {
//   console.log("kalisa danile 1second");
// });

/////💥💥💥💥💥💥💥💥node js module💥💥💥💥💥💥

const sumation = function (num1, num2) {
  return num1 + num2;
};
console.log(sumation(98, 132));

/// and we can add module if we want to use our app other side which are not this
module.exports = sumation;
