//Modules
//Modules - Encapsulated Code (only share mininum)
//Node is CommonJS, every file is module (by default)

// all code need to be in one file? 
// =>No, We will execute from one file but will split code in diff files


// Why use modules?
//problem statement =>
// const secret = "SUPER SECRET"
// const john = 'John'
// const peter = 'peter' //place in sepreate module i.e 4-name.js
// const sayHi = (name)=>{
// console.log(`Hello there ${name}`);
// } //place in utils.js

//to access shared 
const {john, peter}  = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') //if we check this module we are not exporting it with command and we have sign it to veriable, bcoz this module is calling function
// console.log({john, peter});
// console.log(data.singlePerson);
// console.log(data.items);

sayHi("Priyanka")
sayHi(john)
sayHi(peter)


