//main.js
var Hello = require('./module');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();


function execute(someFunction, value) {
    someFunction(value);
}

execute(function (word) {
    console.log(word);
},'hello, boys');
