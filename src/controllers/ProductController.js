const products = require('../mocks/products')

const productController = {
  listProducts(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(products))
  }
}

module.exports = productController