const os = require('os')
const user = os.userInfo();
console.log(user); //info about user

console.log(`the system uptime is ${os.uptime()} seconds`) //returns system updtime in seconds

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMam: os.freemem(),
}
console.log(currentOs)