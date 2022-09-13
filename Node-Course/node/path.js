const path = require('path');
const filePath = path.join('/content', 'subfolder', 'test.txt');

/* Printing the file path. */
console.log(filePath)

/* Printing the path separator for the current operating system. */
console.log(path.sep);

/* Printing the absolute path of the file `path.js` */
console.log(path.resolve('path.js'));

/* Printing the basename of the filePath. */
console.log(path.basename(filePath))

