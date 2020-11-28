const mongoose = require('mongoose');

const Schema = mongoose.Schema;



let lineItem = Schema({
    product_id: Number,
    product_name: String,
    price: Number,
    quantity: Number
})

let orderSchema= Schema({

   
    order_id: Number,
    order_details: [lineItem],
    customer_id: Number,
    customer_name: String,
    shipping_address: [addressSchema],
    deliver_address: [addressSchema],
    total_amount: Number,
    payment_details:  String
})
 
const Order= mongoose.model('orders' , orderSchema);

module.exports= Order;

