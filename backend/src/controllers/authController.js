const{ authServices} = require('../services/auth.service.js');

class authController {
     async login(req,res){
          try {
                    const user = await authServices.loginUser(req.body.email,req.body.password);
                    if(!user.success){
                         res.status(user.status).json(user);
                    }else{
                         res.status(user.status).json(user);
                    }
          } catch (error) {
               res.send({message:error.message,success:false,status:error.status,})
          }
     }



     async register(req,res){
 
     try {
          const userObj ={
               username:req.body.username,
               email:req.body.email,
               password:req.body.password,
          }
           const user =  await authServices.registerUser(userObj.username,userObj.email,userObj.password);
          res.status(user.status).json(user);
     } catch (error) {
          console.log(error)
     }

     }




}

const authControllerObj = new authController();
module.exports= authControllerObj;