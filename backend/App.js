const express = require("express");
const AuthRouter  = require("./src/routers/auth.route.js");
const cookie_parser = require("cookie-parser");

function createApp(){
     const app = express();
     app.use(express.json());
     app.use(express.urlencoded({extended:true}));
     app.use(cookie_parser());
     app.use("/api/auth",AuthRouter);
     return  app;
}

module.exports = createApp;