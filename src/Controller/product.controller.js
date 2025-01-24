const Product = require("../models/product.model");


const createProduct=(req,res)=>{

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


}


const getAllProduct=(req,res)=>{
     
    Product.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| "Not any product found in the database"})
    })

}


const getProductById=(req,res)=>{

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

}

const updateProductById=(req,res)=>{
     
    const productData=req.body;
    Product.findByIdAndUpdate(req.params.id,productData,{new:true})
       .then((data)=>{
        if(!data.length){
            res.status(404).send("product notfound with the given id");
        }
        res.send(data) 
       })
       .catch(err=>{
        return res.status(500).send({message:err.message|| "Internal server error"})
       })
        

}

const deleteProductById=(req,res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data.length){
            return res.status(404).send({message:"product not found with  the given id"})
        }

        return res.send("product deleted successfully!!!");
    })
    .catch(err=>{
        res.send(err)
    })
}

module.exports={
    createProduct,getAllProduct,getProductById,updateProductById,deleteProductById
}