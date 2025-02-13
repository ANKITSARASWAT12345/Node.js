const { default: mongoose } = require("mongoose");
const { ticketStatus } = require("../utils/constants");


const ticketSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    ticketPriority:{
       type:Number,
       required:true,
       default:5
    } ,
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:Object.values(ticketStatus)
    },
    requestor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    assignee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }

    

})

const Ticket=mongoose.model('ticket',ticketSchema);

module.exports={
    Ticket
}