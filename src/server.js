const http = require('node:http')

const products = require('./mocks/products')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | ${request.url}`)

  if (request.url === '/products' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({products}))
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${request.url}`)
  }
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server listening on port ${PORT}.\nhttp://localhost:${PORT}`))