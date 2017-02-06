//使用 Express 可以快速地搭建一个完整功能的网站

//Express 框架核心特性：
//
//    可以设置中间件来响应 HTTP 请求。
//
//    定义了 路由表 用于执行不同的 HTTP 请求动作。
//
//    可以通过向模板传递参数来动态渲染 HTML 页面。

var express = require('express');
var app = express();

//请求和响应
//
//Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
//
//app.get('/', function (req, res) {
//   // --
//})
//
//request 和 response 对象的具体介绍：
//
//Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：
//Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

app.get('/', function (req, res) {
   
	console.log('req.baseUrl');
	res.send('Hello World');
	
	
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
















