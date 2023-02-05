//if file size is too big we can't place the whole string inside a single string/
//for that continuous flow of reading file we need stream.

//created a big file
// const { writeFileSync } = require('fs');
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
// }

const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 9000, //9kb
    encoding: 'utf8'
})
stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => {
    console.log(err);
})