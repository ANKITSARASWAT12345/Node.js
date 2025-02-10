const { getAllUsers, getUserById, updateUser, deleteUser } = require("../Controller/user.controller");
const { verifyJwt, verifyAdmin } = require("../Middlewares/auth.middlewares");



module.exports=function(app){
     app.get("/cs/api/v1/users",[verifyJwt,verifyAdmin],getAllUsers);
     app.get("/cs/api/v1/users/:id",[verifyJwt],getUserById);
     app.put("/cs/api/v1/:id",updateUser);
     app.delete("/cs/api/v1/:id",deleteUser);
}
