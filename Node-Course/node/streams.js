const { writeFile } = require('fs/promises')
// /**
//  * It creates a file called result.txt and writes the string "Hello World" to it 1,000,000 times.
//  */

const CreateBigFile = async () => {
    try {
        await writeFile('./data/result.txt', 'Hello World'.repeat(1000000))
        console.log('file created');
    } catch (error) {
        console.log(error);
    }
}

// CreateBigFile()

const { createReadStream } = require('fs')

const stream = createReadStream('./data/result.txt', {
    /* Setting the buffer size to 90,000 bytes. */
    highWaterMark: 9000000,
    /* Converting the buffer to a string. */
    encoding: 'utf-8'
})

/* Listening for the data event and logging the chunk of data to the console. */
stream.on('data', (chunk) => {
    console.log(chunk);
});
