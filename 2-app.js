//Modules
//CommonJs,every file is module by default
//Modules-Encapsultaed Code 



/*const john = 'john'; //by defalut its global in (NODE JS)
const peter = 'Peter'*/



/*const sayhi = (name) => {
    console.log(`hello there ${name}`)
}*/

const names = require('./3-app')
const sayhi = require('./4-app')
const data = require('./5-app')
require('./6-app');


//console.log(names);
console.log(data)
    // sayhi(`nihar`)
    // sayhi(names.john)
    // sayhi(names.peter)