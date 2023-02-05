// const eventEmitter = require('events');

// const cutomEmitter = new eventEmitter();

//(1).we can have as may response as we want.
//(2).Order of on and emmit matters allot.to a on to be executed emmit must be at a lower point than this.
//(3).we acn pass arguments along with emmit


// cutomEmitter.on('response', () => { /* this type of functions are also called callback */
//     console.log(`data received `);
// })
// cutomEmitter.on('response', (name, id) => { /* this type of functions are also called callback */
//     console.log(`another logic of ${name} and ${id}`);
// })
// cutomEmitter.emit('response', 'nihar', 156)




//Not much imp method though for setting server.
//but we can say by defalut there are many events(built-in)
// const http = require('http')

// const server = http.createServer();
// server.on('request' /*its a by default response from even*/ , (req, res) => {
//     res.end('welome');
// })

// server.listen(5003) //its gona call emmit by default