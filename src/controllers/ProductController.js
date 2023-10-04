const products = require('../mocks/products')

const ProductController = {
  listProducts(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(products))
  }
}

module.exports = ProductController