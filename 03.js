var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
	if(req.url == "/red"){
		fs.readFile("red.html",function(err,data){
			res.end(data);
		})
		// 网页
	}else if(req.url == "/red.css"){
		res.writeHead(200,{"Content-type":"text/css"});
		fs.readFile("red.css",function(err,data){
			res.end(data);
		})
		// css引入
	}else if(req.url == "/3.jpeg"){
		res.writeHead(200,{"Content-type":"image/jpeg"});
		fs.readFile("3.jpeg",function(err,data){
			res.end(data);
		})
	}
		// 图片
}).listen(3000,function(){
	console.log("挂起")
})
// 需要渲染的写入HTML里，然后路由请求响应

