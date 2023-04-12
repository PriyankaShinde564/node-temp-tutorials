// -------------------------------- //

// GLOBALS - No Window!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname); // ==> /Users/priyanka.shinde/Desktop/tutorial
console.log(__filename); // ==> /Users/priyanka.shinde/Desktop/tutorial/1-intro.js
// console.log(require);
// ----------------------------------//

setTimeout(() => {
  console.log("Hello world");
}, 1000);