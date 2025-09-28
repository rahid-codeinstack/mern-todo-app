const express = require("express");
function createApp(){
     const App = express();
     App.use(express.json());
     App.use(express.urlencoded({extended:true}));
     return  App;
}

module.exports = createApp;