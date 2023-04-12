// OS Modules
// Operating system
const os = require('os') //built in module

// info about current user
const user = os.userInfo()
console.log(user);

// methods returns the system uptime in seonds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    relese:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);