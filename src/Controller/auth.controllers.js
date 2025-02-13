const User = require("../models/user.model");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const authConfig = require("../configs/auth.config");
const { userStatus, userType } = require("../utils/constants");


const registerUser=async(req,res)=>{

//   const userTypee=req.body.userType;
//   var status=(userTypee===userType.CUSTOMER ? userStatus.APPROVED:userStatus.PENDING)   

    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        userId:req.body.userId,
        password:bcrypt.hashSync(req.body.password,10),
        userType:req.body.userType,
        userStatus:req.status
       })

    const savedUser=await newUser.save();
    res.status(201).send(savedUser);
 
}

const loginUser=async(req,res)=>{
  
    const user=await User.findOne({userId:req.body.userId})
    if(user===null){
        return res.status(400).send({message:"userId passed is invalid!!"})
    }

    const isValidPassword= bcrypt.compareSync(req.body.password,user.password)
    if(!isValidPassword){
        return res.status(400).send({message:"password passed is invlaid"})
    }
    const token=jwt.sign({id:user.userId},authConfig.SECRETE_KEY,{expiresIn:600})

    res.send({

        name:user.name,
        userId:user.userId,
        email:user.email,
        accessToken:token,
        userType:user.userType
    
    })
     
}



module.exports={
    registerUser,loginUser

}