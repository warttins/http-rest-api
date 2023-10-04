const productController = require("./controllers/ProductController");

const routes = [
  {
    endpoint: '/products',
    method: 'GET',
    handler: productController.listProducts,
  },
]

module.exports = routes