const Product = require('../model/model');

const { connectionDB } = require('../model/connection');

connectionDB();

const getProducts = (app) => {
    try {
        app.get('/api/products', async (req, res) => {
            const products = await Product.find({});
            res.status(200).json({data:products});
        });
    } catch (error) {
        res.status(500).json({message:`ProductsAPI:getProducts:error: ${error}`});
    }
}

const getCategory = (app) => {
    try {
        app.get('/api/products/:categoryProduct', async (req, res) => {
            let {params:{categoryProduct}} = req;
            const result = await Product.find({category:categoryProduct});
            res.json({data:result});
        });
    } catch (error) {
        res.status(500).json({message:`ProductsAPI:getCategory:error: ${error}`});
    }
};

module.exports.ProductsAPI = (app) => {
    getProducts(app),
    getCategory(app)
};