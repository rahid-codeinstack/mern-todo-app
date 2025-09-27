const mongoose = require("mongoose");
function connectDB (){
     mongoose.connect('mongodb://localhost:27017/testingpractic').then(()=>{
          console.log("connect successully");
     }).catch((error)=>{
          console.log('connection rejected');     
     })
}

module.exports=connectDB;