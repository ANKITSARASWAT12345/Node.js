const mongoose=require('mongoose');


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

const Product=mongoose.model("product",productSchema);

module.exports=Product;