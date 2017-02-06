// util 是一个Node.js 核心模块，提供常用函数的集合


// util.inherits(constructor, superConstructor) 是一个实现对象间 原型继承 的函数。
// JavaScript 的面向对象特性是 基于原型 的，与常见的 基于类 的不同。
var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function() {
    console.log(this.name);
};

Base.prototype.sayBye = function() {
    console.log('Bye ' + this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
objBase.sayBye();
console.log(objBase);

console.log('=============================');

var objSub = new Sub();
objSub.showName();
objSub.sayBye();
// 注意：Sub 仅仅继承了Base 在原型中定义的函数，
// 而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// objSub.sayHello();
console.log(objSub);
console.log('=============================');

//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，
//通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。 
console.log(util.inspect(objBase)); 

// util.isArray(object)
//如果给定的参数 "object" 是一个数组，返回true，否则返回false。
util.isArray([])
util.isArray(new Array)
util.isArray({})

// util.isRegExp(object)
//如果给定的参数 "object" 是一个正则表达式，返回true，否则返回false。
util.isRegExp(new RegExp('another regexp'))

// util.isDate(object)
//如果给定的参数 "object" 是一个日期返回true，否则返回false。
util.isDate(new Date())

// util.isError(object)
//如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

util.isError(new Error()) // true








