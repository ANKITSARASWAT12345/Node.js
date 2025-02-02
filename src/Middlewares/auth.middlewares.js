const authConfig = require("../configs/auth.config");
const User = require("../models/user.model")
const jwt=require('jsonwebtoken');
const { userType } = require("../utils/constants");




const validateSignIn=async(req,res,next)=>{
    
    if(!req.body.password){
        return res.status(400).send({message:"failed !!!!  password is not present"})
    }
    if(!req.body.userId){
        return res.status(400).send({message:"failed !!!!  userID is not present"})
    }
    next();

}

const validateSignUp=async(req,res,next)=>{


    if(!req.body.name){
        return res.status(400).send({message:"failed !!!! name is not present"})
    }
    if(!req.body.userId){
        return res.status(400).send({message:"failed !!!!  userId is not present"})
    }
    if(!req.body.password){
        return res.status(400).send({message:"failed !!!!  password is not present"})
    }
    if(!req.body.email){
        return res.status(400).send({message:"failed !!!!  email is not present "})
    }


    //validate the userId
    const users= await User.find({
        $or:[
        {userId:req.body.userId},
        {email:req.body.email}
        ]
    })


    if(users && users.length){
        return res.status(400).send({message:"user with this id is already present in the database"})
    }

    next();

}


const verifyJwt=(req,res,next)=>{


    let token=req.headers['access-token'];
    if(!token){
        res.status(403).send({message:"No token provided"})
    }
    jwt.verify(token,authConfig.SECRETE_KEY,(err,payload)=>{
        if(err){
            return res.status(403).send({message:"invalid JWT token provided"});
        }

        var userId=payload.id;
        req.userId=userId;

        next();
    })
   

}


const verifyAdmin=async(req,res,next)=>{

   const user=await User.findOne({userId:req.userId});
   if(user&&user.userType===userType.ADMIN){
    next();
   }
   else{
    res.status(403).send({message:"only admin can access this route"})
   }
    
}

module.exports={
    validateSignUp,
    validateSignIn,
    verifyJwt,
    verifyAdmin

}