
const {auth} = require("../services/auth.service");
    let userModel ={
     findOne:jest.fn(),   
   }
          let  bcrypt={
                hash:jest.fn(),
                compare:jest.fn()
           }

  let authServices ;
describe("auth - unite testing",()=>{
     beforeEach(()=>{
          authServices= new auth(userModel,bcrypt)
          jest.clearAllMocks();
     })
     test('user logine function should be login user ', async()=>{
          userModel.findOne.mockResolvedValue({_id:1,username:'rahidkhan',email:"rahidkhan@email.com",password:"rahidkhan123"});
          bcrypt.compare.mockResolvedValue(true);
          const resulte = await authServices.loginUser('rahidkhan@email.com','rahidkhan123');
          expect(resulte.user.username).toBe('rahidkhan');
          expect(resulte.status).toBe(200);
          expect(resulte.success).toBe(true);
          expect(userModel.findOne).toHaveBeenCalled();
          expect(userModel.findOne).toHaveBeenCalledWith({email:'rahidkhan@email.com'})
     
     })
     test(' when user not found it should be create error  ', async()=>{
          userModel.findOne.mockResolvedValue(null);
          bcrypt.compare.mockResolvedValue(false);
          const resulte = await authServices.loginUser('rahidkhan@email.com','rahidkhan123');
          expect(resulte.status).toBe(404);
          expect(resulte.success).toBe(false);
          expect(resulte.message).toBe("user not found");
     
     })
     test(' when user not found it should be create error  ', async()=>{
          userModel.findOne.mockResolvedValue({username:"rahidkhan",email:"rahidkhan@email.com",password:"ajs;fja;sljf;lasjdfl;ajsd"});
          bcrypt.compare.mockResolvedValue(false);
          const resulte = await authServices.loginUser('rahidkhan@email.com','rahidkhan123');
          expect(resulte.status).toBe(404);
          expect(resulte.success).toBe(false);
          expect(resulte.message).toBe("wrong credential");
     
     })

})