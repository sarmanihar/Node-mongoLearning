// const { readFile, writeFile } = require('fs');
// const util = require('util')




/*(2).way 2.we are using promies by inbuilt*/
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




/*(3).way 3 to make promise while rquiring*/
const { readFile, writeFile } = require('fs').promises;









//promises return data interms of resolve or reject
//.thne for data(reslve) and .cathc for error(reject)
//promises are used to perform tasks simultaneously
//source
//1.what is promises=>inror to promises=>code with harry
//2. .then() and .catch()=>https://www.youtube.com/watch?v=Fsv4IEH-4Lw&ab_channel=CodeWithHarry


/*(1)way 1.where we are making promies ouselves.*/
// const getText = (path) => {
//         return new Promise((resolve, reject) => {
//             readFile(path, 'utf8', (err, data) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(data)
//                 }
//             })
//         })
//     }



/*way 1.then and catch*/
// getText('./content/first.txt').then(result => console.log(result))
//     .catch((err) => { console.log(err); })



/*way 2.try and catch method*/
// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first);
//         console.log(second); //parallel use of promises
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()




// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');
//         const second = await readFilePromise('./content/second.txt', 'utf8');
//         await writeFilePromise('./content/result-mind-greanade.txt', `this is awesome : ${first} ${second}`)
//         console.log(first);
//         console.log(second); //parallel use of promises
//     } catch (error) {
//         console.log(error);
//     }
// }
// start()


const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-greanade.txt', `this is awesome : ${first} ${second}`)
        console.log(first);
        console.log(second); //parallel use of promises
    } catch (error) {
        console.log(error);
    }
}
start()