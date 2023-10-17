let products = require('../mocks/products')

const ProductController = {
    listProducts(request, response) {
    const { order } = request.query
    const sortedProducts = products.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1
      }

      return a.id > b.id ? 1 : -1
    })
  
    response.send(200, sortedProducts)
  },

  getProductsById(request, response) {
    const { id } = request.params
    const filteredProduct = products.find((product) => product.id === Number(id))
    const productNotFound = !filteredProduct

    if (productNotFound) {
      return response.send(400, { error: 'Product not found' })
    }

    response.send(200, filteredProduct)
  },

  createProduct(request, response) {
    const { body } = request

    const lastProductId = products[products.length - 1].id
    const newProduct = {
      id: lastProductId + 1,
      name: body.name,
      price: body.price,
    }

    products.push(newProduct)
    response.send(201, newProduct)
  },

  updateProduct(request, response) {
    const { id } = request.params
    const { name, price } = request.body

    const filteredProduct = products.find((product) => product.id === Number(id))
    const productNotFound = !filteredProduct

    if (productNotFound) {
      return response.send(400, { error: 'Product not found' })
    } 

    products = products.map((product) => {
      if (product.id === Number(id)) {
        return {
          ...product,
          name,
          price
        }
      }

      return product
    })

    response.send(202, { name, price })
  },

  deleteProduct(request, response) {
    const { id } = request.params

    const newProductsList = products.filter((product) => product.id !== Number(id))
    products = newProductsList

    response.send(204, { message: 'Product successfully removed'})
  }
}

module.exports = ProductController