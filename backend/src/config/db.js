const mongoose = require("mongoose");
function connectDb(){
     mongoose.connect(process.env.MONGOURI).then((data)=>{
     console.log('connection success');
     }).catch((error)=>{
     console.log('connection reject');
     console.log(error);
     })
}

module.exports = connectDb;
