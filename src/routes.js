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
  }
]

module.exports = routes