const ProductController = require("./controllers/ProductController");

const routes = [
  {
    endpoint: '/products',
    method: 'GET',
    handler: ProductController.listProducts,
  },
]

module.exports = routes