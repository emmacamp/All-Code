/* const math = require('./math.js');
console.log(math);

console.log(math.add(1, 3));
console.log(math.subtract(1, 2));
console.log(math.multiply(1, 3));
console.log(math.divide(1, 0));
 */

const os = require('node:os');

console.log('Free mem: ', os.freemem());
console.log('Total mem: ', os.totalmem());