const User = require("../models/user.model");
const { ticketStatus, userType, userStatus } = require("../utils/constants");
const {Ticket}=require('../models/ticket.model');


const createTicket=async(req,res)=>{

  const {title,ticketPriority,description}=req.body;

  const ticket={
    title,
    ticketPriority,
    description,
    status:ticketStatus.OPEN,
    requestor:req.id,
   
  }

  const allocatedEngineer=await User.find({
    userType:userType.ENGINEER,
    userStatus:userStatus.APPROVED
  })

  ticket.assignee=allocatedEngineer._id;
  const newTicket=new Ticket(ticket);
  const createdTicket=await newTicket.save();
  return res.status(201).send(createTicket);

  res.send(ticket);

}


const getAllTicket=async(req,res)=>{

}

const getTicketByIdTicket=async(req,res)=>{

}

const updateTicket=async(req,res)=>{

}

const deleteTicket=async(req,res)=>{

}

module.exports={
    createTicket,
    getAllTicket,
    getTicketByIdTicket,
    updateTicket,
    deleteTicket
}
