const fs = require('fs');

const ex = fs.readFileSync('./ex.txt');
const ex2 = fs.readFileSync('./ex2.txt');

console.log(ex);
console.log(ex2.toString());

const title = 'This is a new title';
const add = 'This is a new title 2';

fs.writeFileSync('./exx.txt', title);

fs.writeFileSync('./exx.txt', add, {
    flag: 'a',
});



// Callback hell
fs.readFile('./ex.txt', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result.toString());

    fs.readFile('./ex2.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
    //...
})
