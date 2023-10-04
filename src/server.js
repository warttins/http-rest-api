const http = require('node:http')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | ${request.url}`)

  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify({
    data: 'Hello World!'
  }))
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server listening on port ${PORT}.\nhttp://localhost:${PORT}`))