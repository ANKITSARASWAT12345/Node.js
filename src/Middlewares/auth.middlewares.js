const User = require("../models/user.model")




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



module.exports={
    validateSignUp,
    validateSignIn

}