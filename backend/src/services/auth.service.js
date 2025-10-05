const bcrypt = require('bcrypt');
const userModel =require("../models/usermodel.js");
const jwt = require("jsonwebtoken");

// user registration function ;
async function registerService(firstname , lastname , username , email , password ){
     if(!firstname || !lastname || !username || !email || !password )return {success:false,message:"form all field required",status:409};
     if(firstname.length  < 4 )return  {success:false,message:"firstname must be atleast 4 character",status:409};
     if(lastname.length  < 4 )return  {success:false,message:"firstname must be atleast 4 character",status:409};
     if(password.length  < 6 )return  {success:false,message:"password must be atleast 6 character",status:409};
     if(!email.includes('@' || '.') )return  {success:false,message:"invalid email type",status:409};
     const hashPassword =  bcrypt.hashSync(password,10);
     const user = { password:hashPassword,  email,  username, firstname, lastname };
     try {
     const existUser =  await userModel.findOne({email:email,username:username,firstname:firstname});
     if(existUser){
          return {success:false,message:"this user already exist",status:429};
     }
     const newUser = userModel(user);
     await  newUser.save();
     return {success:true,status:201,message:"user register successfully"}
     } catch (error) {
     return {success:false,message:error.message,status:500}
     }

}



// user logine controller ;
 async function loginUser (email,password){
     try {
               const validUser = await userModel.findOne({email:email});
               if(!validUser){
                    return {
                         status:404,success:false,message:"wrong email or password",
                    }
               }
               const validpassword = bcrypt.compareSync(password,validUser.hashPassword);
               if(!validpassword){
                    return {
                              success:false,
                              message:"wrong credential",
                              status:404,
                    }
               }
   
               return {
                    user:validUser,
                    message:"login successfully",
                    status:200,
                    success:true,
               }
     } catch (error) {
               return {
                    status:500,
                    message:"some thing wrong locally in server",
                    success:false,
                    Error:error.message, 
               }
     }
}

module.exports = {registerService , loginUser };