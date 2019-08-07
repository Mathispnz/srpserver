const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    brand: {type: String},
    image: {type: String},
    description: {type: String},
    price: {type: Number},
    stock: {type: Number},
    availability: {type: Array},
    inBasket: {type: Boolean},
    size: {type: Array},
    color: {type: String},
    fabrics: {type: String},
    cleaning: {type: String}
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;