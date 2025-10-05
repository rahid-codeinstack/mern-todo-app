const {registerService , loginUser} = require("../services/auth.service.js");
const jwt = require("jsonwebtoken");

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
async function login (req,res){
     const {email,password} = req.body;
     const logineUserRes = await loginUser(email,password);
     if(!logineUserRes.success ){
          res.status(loginUser.status).json({
               success:loginUser.success,
               message: loginUser.message,
               status:loginUser.status,    
               serverError: loginUser.error ? loginUser.error : "",
          })

     }
     const token  = jwt.sign({_id:loginUser.user._id},process.env.JWT_SECRET);
     res.cookie('secret_token',token,{maxAge:10*60*60})
     .status(loginUser.status).json({
          message:loginUser.message,
          status:loginUser.status,
          success:loginUser.success,
     })
}
module.exports = {
     register
     ,
     login
}