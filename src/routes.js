const ProductController = require("./controllers/ProductController");

const routes = [
  {
    endpoint: '/products',
    method: 'GET',
    handler: ProductController.listProducts,
  },

  {
    endpoint: '/products/:id',
    method: 'GET',
    handler: ProductController.getProductsById,
  },

  {
    endpoint: '/products',
    method: 'POST',
    handler: ProductController.createProduct,
  },

  {
    endpoint: '/products/:id',
    method: 'PUT',
    handler: ProductController.updateProduct,
  }
]

module.exports = routes