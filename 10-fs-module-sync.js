const {readFileSync, writeFileSync} = require('fs')
// const fs= require('fs') //similare 
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`) // here it will create new file, and if file is alreadty present it will over write the content in the file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag:'a'}) //by setting  {flag:'a'}, it will not overwrite content instead it add new content after old one (or keeping old one)
console.log('done with this task');
console.log('starting the next task');
