const User = require("../models/user.model");
const bcrypt=require('bcrypt');

const registerUser=async(req,res)=>{

    if(!req.body.name){
        return res.status(400).send({message:"failed to register the new user!!!!"})
    }
    if(!req.body.userId){
        return res.status(400).send({message:"failed to register the new user!!!!"})
    }
    if(!req.body.password){
        return res.status(400).send({message:"failed to register the new user!!!!"})
    }
    if(!req.body.name){
        return res.status(400).send({message:"failed to register the new user!!!!"})
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

    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        userId:req.body.userId,
        password:bcrypt.hashSync(req.body.password,10)
       })

    const savedUser=await newUser.save();
    res.status(201).send(savedUser);
 
}

module.exports=registerUser;