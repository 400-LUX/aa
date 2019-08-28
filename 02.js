var http = require("http")
http.createServer(function(req,res){
	// 解决中文乱码 响应头
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	res.end("中国")
}).listen(3000)