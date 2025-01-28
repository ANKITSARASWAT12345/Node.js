

const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    userType:{
       type:String,
       default:"CUSTOMER"
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
       immutable:true,
       default:()=>Date.now()
    }
})


const User=mongoose.model("user",userSchema);

module.exports=User;
