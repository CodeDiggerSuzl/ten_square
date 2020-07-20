let http = require('http')
http
	.createServer(function(request, response) {
		response.writeHead(200, { 'Content-Type': 'text/plain' })
		for (let i = 0; i < 100; i++) {
			response.write('write world \n')
		}
		response.end('')
	})
	.listen(8080)

console.log('$', 'Server running at 8080')
