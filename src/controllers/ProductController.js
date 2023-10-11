const products = require('../mocks/products')

const ProductController = {
  listProducts(request, response) {
    const { order } = request.query
    const sortedProducts = products.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1
      }

      return a.id > b.id ? 1 : -1
    })
  
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(sortedProducts))
  },

  getProductsById(request, response) {
    const { id } = request.params
    const filteredProduct = products.find((product) => product.id === Number(id))
    const productNotFound = !filteredProduct

    if (productNotFound) {
      response.writeHead(400, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ error: 'Product not found'}))
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(filteredProduct))
    }
  }
}

module.exports = ProductController