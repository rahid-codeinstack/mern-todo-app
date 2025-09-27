const jwt = require("jsonwebtoken");
class auth{
     constructor(userModel,bcrypt){
          this.userModel=userModel;
          this.bcrypt=bcrypt;
     }
     async loginUser(email,password){
          const validUser = await this.userModel.findOne({email:email})
               if(!validUser){
                    return {
                         status:404,
                         message:"user not found",
                         success:false,
                    }
               }
            const validPassword =  await this.bcrypt.compare(password,validUser.password);
            if(!validPassword){
          return {
               message:"wrong credential",
               success:false,
               status:404,
          }
         }

 const token = jwt.sign({_id:validUser._id},'sajdfl;asjdf;lajsdfisdufiasdfhjsakdhfkasdhflkasdhfklj');
 return {
     token:token,
     user:validUser,
     success:true,
     status:200,
     }
     }

async registerUser(username,email,password){
     if(username,email,password)
     {
          const hashPassword = await bcrypt.hash(password,10);
          const user = new this.userModel({username,email,password:hashPassword});
          await user.save();
          return {
               message:'user registered successfully',
               success:true,
               status:201,

          }
     }else{
          message:'hellow world'
     }
     
}
}

  const bcrypt = require('bcrypt');
const {userModel} = require('../models/userModel.js');
   const authServices = new auth(userModel,bcrypt);
  module.exports = {   authServices:authServices   ,    auth:auth  };