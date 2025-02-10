const {registerUser,loginUser} = require("../Controller/auth.controllers");

const {validateSignUp,validateSignIn} = require("../Middlewares/auth.middlewares");



module.exports=(app)=>{

    app.post("/cs/api/v1/auth/signup",[validateSignUp],registerUser);
    app.post("/cs/api/v1/auth/signin",[validateSignIn],loginUser);
}

