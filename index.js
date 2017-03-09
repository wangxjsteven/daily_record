var http = require("http"),
	port=4000;

http.createServer(function (request,response) {
	// http请求
	response.writeHead(200,{'Content-Type':'text-plain'});
	response.end('hello wangxj,good!');
}).listen(port);

console.log('success,listen on port:'+port);