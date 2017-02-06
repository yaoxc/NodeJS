//在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。
//表单提交到服务器一般都使用GET/POST请求。

//获取GET请求内容
//由于GET请求直接被嵌入在路径中，
//URL是完整的请求路径，
//包括了?后面的部分，
//因此你可以手动解析后面的内容作为GET请求的参数。

var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain;charset:utf-8'});
	
	// 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
	res.write("\n");
	
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);




