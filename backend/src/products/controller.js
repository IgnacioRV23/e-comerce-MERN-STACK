const { ProductsService } = require('./service');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            const products = await ProductsService.getProducts();
            res.status(200).json({data:products});
        } catch (error) {
            console.log(`ProductsController.getProducts:Error: ${error}`);
        }
    },

    createProduct: async (req, res) => {
        try {
            let {body:newProduct} = req;
            await ProductsService.create(newProduct);
            res.status(200).json({message:'Producto creado'});
        } catch (error) {
            console.log(`ProductsController.createProduct:Error: ${error}`);
        }
    }
};