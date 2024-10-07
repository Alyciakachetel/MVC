// controllers/productController.js
const Product = require('../models/product');

class ProductController {
  static listProducts(req, res) {
    const products = Product.getAllProducts();
    res.render('productView', { products });
  }
}

module.exports = ProductController;
