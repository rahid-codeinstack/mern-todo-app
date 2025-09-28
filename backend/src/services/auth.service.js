const bcrypt = require('bcrypt');
const userModel =require("../models/usermodel.js");
async function registerService(firstname , lastname , username , email , password ){
     if(!firstname || !lastname || ! username || !email || !password )return {success:false,message:"form all field required",status:409};
     if(firstname.length  < 4 )return  {success:false,message:"firstname must be atleast 4 character",status:409};
     if(lastname.length  < 4 )return  {success:false,message:"firstname must be atleast 4 character",status:409};
     if(password.length  < 6 )return  {success:false,message:"firstname must be atleast 4 character",status:409};
     if(!email.includes('@' || '.') )return  {success:false,message:"invalid email type",status:409};
     const hashPassword =  bcrypt.hashSync(password,10);
     const user = { password:hashPassword,  email,  username, firstname, lastname };
     try {
     const existUser =  await userModel.findOne({email:email,username:username,firstname:firstname});
     if(existUser){
          return {success:false,message:"this useralready exist",status:429};
     }
     const newUser = userModel(user);
     await  newUser.save();
     return {success:true,status:201,message:"user register successfully"}
     } catch (error) {
     return {success:false,message:error.message,status:500}
     }

}

module.exports = {registerService}