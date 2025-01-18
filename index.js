const express=require('express');
const app=express();
const products=require("./product");
const bodyParser=require("body-parser");


app.use(bodyParser.json());
 
app.use((req,res,next)=>{
 console.log("this is custom middleware");
 console.log(req.body)
 next()
})
console.log(products)



app.get("/",(req,res)=>{
    res.send("<h1>Ankit Saraswat<h1>")
})

app.get("/products",(req,res)=>{
    res.send(products)
})

app.get("/products/:id",(req,res)=>{
    const product=products.find((product)=>product.id==req.params.id);
    if(product==undefined){
        res.status(404);
        res.send("product id passed is not in the database")
    }
    return res.send(product);

})

app.post("/products/new",(req,res)=>{
    products.push(req.body);
    return res.status(201).send({message:"Product created succeslly"})
    
})

app.delete("/products/:id",(req,res)=>{

    const product=products.find((product)=>product.id==req.params.id);
    if(product==undefined){
        res.status(404);
        res.send("product id passed is not in the database")
    }

    const deletingProduct=products.filter((product)=>{
        product.id!=req.params.id;
    })
    return res.status(201).send({message:`product with id ${req.params.id} is deleted  successfully`})
})

app.listen(3000,()=>{
    console.log("app listen at port number :3000")
})