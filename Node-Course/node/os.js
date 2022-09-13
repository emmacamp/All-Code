const os = require('os');
const { compileFunction } = require('vm');
/* 
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());
console.log(os.networkInterfaces());
 */

const array = 2342;


console.table(array,)


console.table(
    {
        name: os.platform(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        homedir: os.homedir(),
        hostname: os.hostname(),
        klk: array,

    },
)