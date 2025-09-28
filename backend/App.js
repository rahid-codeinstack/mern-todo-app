const express = require("express");
const AuthRouter  = require("./src/routers/auth.routes.js");

function createApp(){
     const App = express();
     App.use(express.json());
     App.use(express.urlencoded({extended:true}));
     App.use('/api/auth/',AuthRouter)
     return  App;
}

module.exports = createApp;