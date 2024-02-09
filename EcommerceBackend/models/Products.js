const { mongoose } = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{type: String, required: true},
    supplier:{type: String, required: true},
    price:{type: Number, required: true},   
    imageURL:{type: String, required: true},
    description:{type: String, required: true},
    product_location:{type: String, required: true},
},{timeStamps: true})

module.exports = mongoose.model("Product", ProductSchema);