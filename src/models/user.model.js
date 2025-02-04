

const mongoose=require('mongoose');
const { userType, userStatus } = require('../utils/constants');

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
       default:userType.CUSTOMER,
       enum:[userType.CUSTOMER,userType.ADMIN,userType.ENGINEER]
    },
    userStatus:{
        type:String,
        required:true,
        default:userStatus.APPROVED,
        enum:[userStatus.APPROVED,userStatus.PENDING,userStatus.REJECTED]

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
