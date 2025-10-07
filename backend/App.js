const express = require("express");
const AuthRouter  = require("./src/routers/auth.route.js");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();


function createApp(){
     const app = express();
     app.use(express.json());
     app.use(express.urlencoded({extended:true}));
     app.use(cookieParser());
     app.use("/api/auth",AuthRouter);
     return  app;
}

module.exports = createApp;