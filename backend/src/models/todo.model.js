const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
        firstname:{
               type:String,
               required:true,
        },
        lastname:{
               type:String,
               required:true,
        },
        username:{
               type:String,
               required:true,
        },
        email:{
               type:String,
               required:true,
               unique:true
        },
        password:{
               type:String,
               required:true,
             
        },
        evater:{
               type:String,
               default:"https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
        }
        
      
},{timestamps:true});
const userModel = mongoose.model("TodoUser",userSchema);
module.exports = userModel;
