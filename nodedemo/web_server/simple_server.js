let http = require('http')
http
	.createServer(function(request, response) {
		response.writeHead(200, { 'Content-Type': 'text/plain' })
		response.end('Hello node.js')
	})
	.listen(8080)

console.log('$ Server is running at http://localhost:8080')
