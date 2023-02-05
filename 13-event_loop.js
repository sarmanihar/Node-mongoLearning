//1.call-back-function=>eg:functions in evetlistener
//source=>https://www.w3schools.com/js/js_callback.asp
/*
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
In the example above, myFunction is used as a callback.
 */
//2.js is a single threaded language.can perform only on etask at a time.



//async version of read file
//here also evet loop is working
//eg1:
const { readFile, writeFile } = require('fs');
console.log('statd first task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('error1');
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log("startin next task")




//eg2:
console.log('first task');
setTimeout(() => { console.log('second task') }, 0);
console.log('next task');



//eg3:
console.log('first task');
setInterval(() => { console.log('second task') }, 0); //setinterval shows after every 2sec the code line will be executed
//but it wont cause task-queue and stack overfow
console.log('next task');


//eg4
const http = require('http');
const server = http.createServer((req, res) => { /*hy event event loop just keep listening to the incoming requests*/
    console.log('request event');
    res.end('hello world');
})
server.listen(5003, () => { console.log('server is listening on port:5003') })