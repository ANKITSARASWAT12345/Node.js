 
const { getAllProduct, createProduct, getProductById, updateProductById, deleteProductById } = require('../Controller/product.controller')
const Product=require('../models/product.model')

 module.exports=(app)=>{
     


    //create a new product 
    app.post('/product',createProduct)
    
    //find all the products in the database
    
    app.get('/products',getAllProduct)
    
    
    //find specific product in the database
    
    app.get('/product/:id',getProductById)
    
    //update a existing user in database
    
    app.put('/product/:id',updateProductById)
    
    //Delete product by its id

    app.delete("/product/:id",deleteProductById)


 }


