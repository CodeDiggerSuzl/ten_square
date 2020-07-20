var http = require('http')
var url = require('url')

http
	.createServer(function(request, response) {
		response.writeHead(200, { 'Content-Type': 'text/plain' })
		let params = url.parse(request.url, true).query
		response.write('name:' + params.name)
		response.write('\n')
		response.end()
	})
	.listen(8080)
