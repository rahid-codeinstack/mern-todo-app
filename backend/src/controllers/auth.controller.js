const {registerService} = require("../services/auth.service.js");
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
     

}
module.exports = {
     register
     ,
     login
}