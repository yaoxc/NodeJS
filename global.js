// 在浏览器 JavaScript 中，通常 window 是全局对象，
// 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
// global 最根本的作用是作为全局变量的宿主。


// 输出全局变量 __filename 的值
console.log( __filename );

// 输出全局变量 __dirname 的值
console.log( __dirname );

// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
// 返回值: 返回一个代表定时器的句柄值。
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var timer = setTimeout(printHello, 2000);
console.log(timer);
clearTimeout(timer);

// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// 返回一个代表定时器的句柄值。
// 两秒后执行以上函数
var ti = setInterval(printHello, 2000);
 setTimeout(function () {
    clearInterval(ti)
},6000);
// console
// console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。
// Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。
// console.trace()：向标准错误流输出当前的调用栈。
console.trace();


// process
// process 是一个全局变量，即 global 对象的属性。
// 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");









