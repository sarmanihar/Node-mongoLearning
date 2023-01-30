//this async method is farrr better han he 
//sync one 9-app.js.its faster
//reason=>freecodecamp-node and express vid(8:16:47)=>1:32:22
//but the call back functions make them complex and messy.so we will learn to use promises,async-await
const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('error1');
        return;
    }
    /*else {
           console.log(result);
       }*/
    const first = result;
    readFile('./content/second.txt', 'utF8', (err, result) /*this type of functions also in eventlisteners are callded call-back functions)*/ => {
        if (err) {
            console.log('error2');
            return;
        }
        const second = result
        writeFile('./content/result-sync.txt', `here is the result : ${first},${second}`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log('error3');
                return;
            }
            //console.log(result);
        })
    })
})