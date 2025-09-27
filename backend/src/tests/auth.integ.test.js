const { MongoMemoryServer } = require("mongodb-memory-server");
const createApp = require("../app.js");
const mongoose = require('mongoose');
const request = require("supertest");
  let mongoServer ;
     let app;
describe('auth - integration tesing ',()=>{
   

     beforeAll( async ()=>{
          mongoServer  =  await MongoMemoryServer.create();
          const uri = mongoServer.getUri();
          await mongoose.connect(uri);
             app = createApp();
     })
     afterAll( async ()=>{
      await mongoServer.stop();
      await mongoose.disconnect();

     })
     test(' login - integration testing ',  async () => {
     const user = {
          username:'rahidkhan',
          email:"rahidhkan@email.com",
          password:"rahidhan123"
     }
    (await request(app).post('/register')).send(user);
   const result= await request(app).post(user.email,user.password);
   expect(result.statusCode).toBe(200);
   expect(result.body.user.username).toBe('rahidkhan');

       
     })
     
})