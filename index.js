const express=require('express');
const app=express();
const products=require("./product");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");




app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Backend1')
.then(()=>{
    console.log("database connected succesfully")
})
.catch((err)=>{
    console.log(err)
})


const productSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true
    },
    feature:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:['Fashion','Electronics']
    }
});

const Product=mongoose.model("product",productSchema)


//create a new product 
app.post('/product',(req,res)=>{
    if(!req.body){
        return res.status(400).send("Product can not be empty")
    }
    const newProduct=new Product({
        id:req.body.id,
        name:req.body.name,
        description:req.body.description,
        feature:req.body.feature,
        price:req.body.price,
        category:req.body.category
    })
    newProduct.save()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        return res.status(500).send({message:err.message||"Internal server error"})
    })
})

//find all the products in the database

app.get('/products',(req,res)=>{
    Product.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| "Not any product found in the database"})
    })
})


//find specific product in the database

app.get('/product/:id',(req,res)=>{
    const id=req.params.id;
    Product.findById(id)
    .then((data)=>{
        if(!data.length){
            res.send("invalid id passed")
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| "Not any product found in the database"})
    })
    
})






app.listen(3000,()=>{
    console.log("app listen at port number :3000")
})