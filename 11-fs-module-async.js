const {readFile, writeFile} = require('fs')
// const fs= require('fs') //similare 
console.log("start");
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }else{
    const first = result
    readFile('./content/second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,(err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.log(result); //will be undefined
            console.log('done with this task');
        })
    })
    }
})
console.log('starting the next task');

// most of the task will be reading from the database and writing into database, use of callbacks, promices will more good here in this case
