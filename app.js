//npm 
// 1. We can use our own code in other project
// 2. Use code written by other developers
// 3. Share our own solutions with other developers as well
// any one can add anything on npm, so for security check weekly downloads then only install package
// check version npm --v 

// Local dependancy
// npm i <packagename>

// global dependancy
// npm i -g <packagename>
// sudo npm i -g <packagename> //on mac

// package.json - manifest file (stores important info about project/package)
// manual approch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);