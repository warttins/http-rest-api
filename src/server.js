const http = require('node:http')
const { URL } = require('url')
const routes = require('./routes')
const bodyParser = require('./helpers/bodyParser')

const server = http.createServer((request, response) => {
  const parsedURL = new URL(`http://${request.headers.host}${request.url}`)
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  let { pathname } = parsedURL
  let id = null

  const splitedEndpoint = pathname
    .split('/')
    .filter(Boolean)

  if (splitedEndpoint.length > 1) {
    pathname = `/${splitedEndpoint[0]}/:id`
    id = splitedEndpoint[1]
  }
  
  const route = routes.find((routeObject) => (
      routeObject.endpoint === pathname && routeObject.method === request.method
    ))
    
  if (route) {
    request.query = Object.fromEntries(parsedURL.searchParams)
    request.params = { id }

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(body))
    }

    if(['POST', 'PUT'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response))
    } else {
      route.handler(request, response)
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${pathname}`)
  }
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server listening on port ${PORT}.\nhttp://localhost:${PORT}`))