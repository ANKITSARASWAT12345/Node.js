const User = require("../models/user.model")



const getAllUsers=async(req,res)=>{

  try{
    const users=await User.find({});
    return res.status(200).send(users);

  }

  catch(e){
    return res.status(500).send({message:e.message||"Internal server error"})
  }

}

const getUserById=async(req,res)=>{
    
    try{
        const users=await User.findOne({userId:req.params.id});
        return res.status(200).send(users);
    
      }
    
      catch(e){
        return res.status(500).send({message:e.message||"Internal server error"})
      }
}

const updateUser=async(req,res)=>{

}

const deleteUser=async(req,res)=>{
     
}

module.exports={
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}