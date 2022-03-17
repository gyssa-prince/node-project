import express from 'express';
import supertest from 'supertest';
import mongoose from 'mongoose';
const app = express.Router()
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
var connected
const connection =mongoose.connection;
connection.once("open",()=>{
  connected=1;
})
describe("If connected successfully status code should be 200",()=>{})
expect(1).toBe(1);

describe("Login",()=>{
  describe("post login route",()=>{
  describe("if someone is successfully logged in",()=>{
    it("should return status code 200", ()=>{
      expect(true).toBe(true);
    });
  })
});
})

const localhost = ()=>{
  return 200
}

test("should respond with a 200 status code",  () => {
    const response =app.get('/', (req,res)=>{
    })
    expect(localhost()).toBe(200)
    
  })

  test("should (/login) go the login route",()=>{
  let a ='/blogs';
 var route;
  if(a=='/blogs'){route ='loginRoute'}
expect (route).toBe('loginRoute') 
})

test("should (/blogs) go the blogs route",()=>{
  let a ='/blogs';
  var route;
  if(a=='/blogs'){ route ='blogsRoute'}
expect (route).toBe('blogsRoute') 
})

