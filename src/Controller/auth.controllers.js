const User = require("../models/user.model");


const registerUser=(req,res)=>{
    console.log(req.body);
    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        userId:req.body.userId
    })
    res.send("register succesfully");
}

module.exports=registerUser;