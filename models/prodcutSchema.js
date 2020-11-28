const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let categorySchema= Schema({

    category_id: String,
    category_name: String,
})

let productSchema= Schema({

    product_id: String,
    product_name: String,
    category_id: [categorySchema],
    price: Number,
    product_details: String,
    product_image:[String],
    feedback:[{
        customer_name: String,
        feedback: String,
        reviews: Number,
    }]
})    

const Product= mongoose.model('product' , productSchema);

module.exports= Product;