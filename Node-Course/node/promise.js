// const { readFile } = require('fs');
// const { promisify } = require('util');
// const readFilePromise = promisify(readFile);

const { readFile } = require('fs/promises');




const getFile = (file) => {
    return new Promise((resolve, reject) => {
        readFile(file, 'utf-8', (err, data) => {
            if (!err) return resolve(data);
            reject(err);
        });
    });
};




getFile('./ex.txt')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log('done reading file'));


/* async function read(file) {
    try {
     const data = await getFile(file);
     console.log(data);
 } catch (err) {
     console.log(err);
 }
} */
// const readFilePromise = promisify(readFile);

// async function readd() {
//     try {
//         const data = await readFilePromise('./ex.txt', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }


async function readd() {
    try {
        const data = await readFile('./ex.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
// read('./ex.txt');
readd();
