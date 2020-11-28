const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let querySchema= Schema({

    query_id: String,
    query_details: String,
    email  : String,
    phone : Number
})  

const Query= mongoose.model('query' , querySchema);

module.exports= Query;