const {MongoMemoryServer}  = require("mongodb-memory-server");
const createApp = require("../../App.js");
const mongoose = require("mongoose");
const userModel = require("../models/usermodel.js");
const request = require("supertest");
const { loginUser } = require("../services/auth.service.js");
const bcrypt = require('bcrypt');

let mongoServer , app ;
describe('auth integration testing ', ()=>{
     beforeAll( async ()=>{
          mongoServer = await MongoMemoryServer.create();
          const mongoUri = mongoServer.getUri()
          await mongoose.connect(mongoUri)
          app = createApp();
     
     });
     beforeEach( async()=>{
          const collection = mongoose.connection.collections;
          for(let i in collection){
         await collection[i].deleteMany({});
          }
     })
     afterAll( async()=>{
          await mongoServer.stop();
          if(mongoServer){
               await mongoose.disconnect();
          }
         
          
          
     })





     describe('register function request user must be register ', () =>{
     test('register function integration testing  this registeration functjion must create new user ', async()=>{
        const newUser = {
             firstname:"rahid",lastname:"khan",username:"rahidTanha",email:"rahidtanha@email.com",password:"rahidkhan1223"
         }
          const resulte = await request(app).post("/api/auth/register").send(newUser);
          expect(resulte.body.success).toBeTruthy();
     });
    test('register function must be create an error when some try register user two time  ', async()=>{
        const newUser = {
             firstname:"rahid",lastname:"khan",username:"rahidTanha",email:"rahidtanha@email.com",password:"rahidkhan1223"
         }
          const resulte = await request(app).post("/api/auth/register").send(newUser);
          expect(resulte.body.success).toBeTruthy();
               const resulte2 = await request(app).post("/api/auth/register").send(newUser);
               expect(resulte2.body.message).toBe("this user already exist");
               expect(resulte2.body.status).toBe(429)
     });

   test('register function must be create an error when some use firstname short  ', async()=>{
        const newUser = {
             firstname:"r",lastname:"khan",username:"rahidTanha",email:"rahidtanha@email.com",password:"rahidkhan1223"
         }
          const resulte = await request(app).post("/api/auth/register").send(newUser);
          expect(resulte.body.success).toBeFalsy();
         expect(resulte.body.message).toBe("firstname must be atleast 4 character");
          
     });
   test('register function must be create an error when some one use short password  ', async()=>{
        const newUser = {
             firstname:"rahidkhan",lastname:"khan",username:"rahidTanha",email:"rahidtanha@email.com",password:"r"
         }
          const resulte = await request(app).post("/api/auth/register").send(newUser);
          expect(resulte.body.success).toBeFalsy();
         expect(resulte.body.message).toBe("password must be atleast 6 character");
          
     });
   test('register function must be create an error when some register with invalid email type ', async()=>{
        const newUser = {
             firstname:"rahidkhan",lastname:"khan",username:"rahidTanha",email:"rahidtanhemail.com",password:"rahidkhan"
         }
          const resulte = await request(app).post("/api/auth/register").send(newUser);
          expect(resulte.body.success).toBeFalsy();
         expect(resulte.body.message).toBe("invalid email type");    
     });
 })

describe("post /api/auth/login", ()=>{
     test("logine route api should logine user successfully",  async()=>{
        const user = {
               firstname:"rahid",
               lastname:"khan",
               username:"tanha",
               email:"tanha@email.com",
               password:"tanha12345",
        }
     await request(app).post('/api/auth/register').send(user).expect(201);
    const res = await request(app).post('/api/auth/login').send({email:"tanha@email.com",password:"tanha12345"});
    expect(res.statusCode).toBe(200);
     expect(res.body.message).toBe("login successfully");
     expect(res.body).toHaveProperty("token")
     })
})






})
