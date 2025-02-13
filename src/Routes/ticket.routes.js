const { getAllTicket, createTicket, getTicketByIdTicket, updateTicket, deleteTicket } = require("../Controller/ticket.controller");
const { verifyJwt } = require("../Middlewares/auth.middlewares");


module.exports=(app)=>{

    app.get('/cs/api/v1/tickets',getAllTicket);
    app.post('/cs/api/v1/tickets',[verifyJwt],createTicket);
    app.get('/cs/api/v1/tickets/:id',getTicketByIdTicket);
    app.put('/cs/api/v1/tickets/:id',updateTicket);
    app.delete('/cs/api/v1/tickets/:id',deleteTicket);
}