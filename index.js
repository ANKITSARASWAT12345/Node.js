const express=require('express');
const app=express();

const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const morgan=require('morgan');
const dbConfig = require('./src/configs/db.config');
const serverConfig = require('./src/configs/server.config');





app.use(bodyParser.json());
app.use(morgan('combined'));

mongoose.connect(dbConfig.DB_URL)
.then(()=>{
    console.log("database connected succesfully")
})
.catch((err)=>{
    console.log(err)
})


require('./src/Routes/product.routes')(app);



app.listen(serverConfig.PORT,()=>{
    console.log("app listen at port number :3000")
})