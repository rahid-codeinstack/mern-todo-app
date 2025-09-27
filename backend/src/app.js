const express = require("express");
const authRouter = require("./routers/auth.route.js");
const createApp = function (){
     const app = express();
     app.use(express.json());
     app.use(authRouter);
     app.use(express.urlencoded({extended:true}));
     return app;
}
module.exports = createApp;