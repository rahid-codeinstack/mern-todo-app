const {registerService , loginUser} = require("../services/auth.service.js");
const jwt = require("jsonwebtoken");


// user register route functionality;

 async function register (req,res,next){
     const {firstname,lastname,username,email,password}  = req.body;
     const resulte =   await registerService(firstname,lastname,username,email,password);
     if(!resulte.success)
     {
     res.status(resulte.status).json(resulte);
     }else{
     res.status(resulte.status).json(resulte);
     }
}




// user logine route functinality

async function login (req,res){
   try {
       const {email,password} = req.body;
     const logineUserRes = await loginUser(email,password);
     if(!logineUserRes.success){
          res.status(logineUserRes.status).json(logineUserRes);
          return;
     }else{
           const token = jwt.sign({_id:logineUserRes._id},process.env.JWT_SECRET);
           logineUserRes.token = token;
           res.cookie("access_token",token,{maxAge: 10 * 60 * 60 * 24}).status(logineUserRes.status).json(logineUserRes);
     }
   } catch (error) {
     res.send({success:false,message:error.message,status:500,});
   }
    
}
module.exports = {
     register
     ,
     login
}