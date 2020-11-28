const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let addressSchema =Schema({

    addressline1: String,
    addressline2: String,
    addressline3: String,
    city:String,
    zipcode: Number,
    state:String
})

let customerSchema = Schema({
    
    firstname: String,
    lastname: String,
    phone: {
         type:Number,
         unique:true
    },
    address: [addressSchema],
    email: {
        type:String,
        unique:true
    },
    password: String
})

const Customer= mongoose.model('customer' , customerSchema);

module.exports= Customer;