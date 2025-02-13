const { ticketStatus } = require("../utils/constants");


const createTicket=async(req,res)=>{

  const {title,ticketPriority,description}=req.body;

  const ticket={
    title,
    ticketPriority,
    description,
    status:ticketStatus.OPEN,
    requestor:req.id
  }

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
