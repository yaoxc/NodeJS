//静态文件
//
//Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
//
//你可以使用 express.static 中间件来设置静态文件路径。
//例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
//
//app.use(express.static('public'));

var express = require('express');
var app = express();

app.use(express.static('public'));

//get方式

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

});













