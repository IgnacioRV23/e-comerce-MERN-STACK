const express = require('express');

const { ProductsController } = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
    .get('/', ProductsController.getProducts)
    .post('/', ProductsController.createProduct);
    
    app.use('/api/products', router);
};