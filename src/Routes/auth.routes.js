const registerUser = require("../Controller/auth.controllers")


module.exports=(app)=>{

    app.post("/auth/signup",registerUser);
}