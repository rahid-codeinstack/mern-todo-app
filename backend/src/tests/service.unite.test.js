const userModel = require("../models/usermodel.js");
const { registerService }= require("../services/auth.service.js");
jest.mock("../models/usermodel.js")
describe("auth services tesing ", ()=>{
test("user registration services tesing ",  async ()=>{
     userModel.findOne.mockResolvedValue(null);
     const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     }
     const mockSave = jest.fn().mockResolvedValue(newUser);
     userModel.mockImplementation(()=>({save:mockSave}));
     const resulte = await registerService(newUser.firstname,newUser.lastname,newUser.username,newUser.email,newUser.password);
     expect(userModel.findOne).toHaveBeenCalled();
     expect(userModel).toHaveBeenCalled();
     expect(userModel).toHaveBeenCalledTimes(1);
    expect(resulte.success).toBeTruthy();
    expect(resulte.status).toBe(201);  
});
test('when user already exist in data base  then registeration services should be create an error', async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan",lastname:"wazire"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     }
       const resulte = await registerService(newUser.firstname,newUser.lastname,newUser.username,newUser.email,newUser.password);
       expect(userModel.findOne).toHaveBeenCalled();
       expect(resulte.status).toBe(429);
       expect(resulte.message).toBe('this user already exist');
       expect(resulte.success).toBeFalsy();
})
test("when some miss firstname field it shoud be create an error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     }
       const resulte = await registerService(undefined,newUser.lastname,newUser.username,newUser.email,newUser.password);
      expect(resulte.message).toBe("form all field required");
})
test("when some miss lastname  field it shoud be create an error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     }
       const resulte = await registerService(newUser.firstname,undefined,newUser.username,newUser.email,newUser.password);
      expect(resulte.message).toBe("form all field required");
})
test("when some miss username field it shoud be create an error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     }
       const resulte = await registerService(newUser.firstname,newUser.lastname,undefined,newUser.email,newUser.password);
      expect(resulte.message).toBe("form all field required");
})
test("when some miss password field it shoud be create an error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhan123"
     }
       const resulte = await registerService(newUser.firstname,newUser.lastname,newUser.username,undefined,newUser.password);
      expect(resulte.message).toBe("form all field required");
})

test("when some add short password it shoud be create error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"ra"
     }
       const resulte = await registerService(newUser.firstname,newUser.lastname,newUser.username,newUser.email,newUser.password);
      expect(resulte.message).toBe("password must be atleast 6 character");
})
test("when some add short firstname it shoud be create error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"r",lastname:"khan",username:"rahidkhan",email:"rahidkhan@email.com",password:"rahidkhaasjdf;ljasldfj"
     }
       const resulte = await registerService(newUser.firstname,newUser.lastname,newUser.username,newUser.email,newUser.password);
      expect(resulte.message).toBe("firstname must be atleast 4 character");
})
test("when some add invalid email type it shoud be create error", async()=>{
     userModel.findOne.mockResolvedValue({firstname:"rahidkhan"});
       const newUser = {
          firstname:"rahid",lastname:"khan",username:"rahidkhan",email:"rahidkhanemailcom",password:"rahidkhaasjdf;ljasldfj"
     }
       const resulte = await registerService(newUser.firstname,newUser.lastname,newUser.username,newUser.email,newUser.password);
      expect(resulte.message).toBe("invalid email type");
});

})
