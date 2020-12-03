const Port = 8525;
const express =  require('express')
const mongoose = require('mongoose')
const app= express()

const cart = require('./models/cartSchema')
const category = require('./models/categorySchema')
const customer = require('./models/customerSchema')
const order = require('./models/orderSchema')
const product = require('./models/productSchema')
const support = require('./models/supportSchema')
const addressRoutes = require('./routes/addressRoutes')
const cartRoutes = require('./routes/cartRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const feedbackRoutes = require('./routes/feedbackRoutes')
const homeRoutes = require('./routes/homeRoutes')
const loginRoutes = require('./routes/loginRoutes')
const orderRoutes = require('./routes/orderRoutes')
const productRoutes = require('./routes/productRoutes')
const supportRoutes = require('./routes/supportRoutes')


mongoose.connect('mongodb://localhost/Sprint', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/',addressRoutes,cartRoutes,categoryRoutes,feedbackRoutes,homeRoutes,loginRoutes,orderRoutes,productRoutes,supportRoutes )

app.listen(Port, (req,res)=>{
    console.log("Server started on Port" +Port )
})