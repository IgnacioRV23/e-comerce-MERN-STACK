const { connectionDB } = require('../model/connection');

const Product = require('../model/model');

connectionDB();

const getProducts = async () => {
    const products = await Product.find({});
    return products;
};

const create = async (newProduct) => {
    const product = new Product(newProduct);
    await product.save();
};

module.exports.ProductsService = {
    getProducts,
    create
};