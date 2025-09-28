const mongoose = require("mongoose");
function connectDb(){
     mongoose.connect(process.env.MONGOURI).then((data)=>console.log("connected successfullly")).catch(()=>console.log("connection rejected"));
}

module.exports = connectDb;
// rahidkhanisveryniceboyinadilpubliceschoolandcollege
// rahid-todos