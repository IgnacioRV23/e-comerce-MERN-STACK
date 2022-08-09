const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    sale: Number,
    subcategory: String,
    detail: String
});

module.exports = model('product', productSchema);