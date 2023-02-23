const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Must complete field'],
        minLength:[2, 'Product  name must be at least 2 characters'],
        maxLength:[45, 'Product name cannot exceed 45 characters '],
    },
    price:{
        type: Number,
        required:[true, 'Must complete field'],
        min:[0, 'Product cost cannot be negative'],
        max:[3, 'Product cost cannot be more than 3']
        
    },
    description:{
        type: String,
        required:[true, 'Must complete field'],
        minLength:[10, 'Product description must be at least 10 characters'],
    }
},  {timestamps: true})

const Product = mongoose.model('Product' , ProductSchema);

module.exports = Product;