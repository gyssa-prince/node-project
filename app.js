const express = require("express");
const mongoose = require("mongoose");
const Message = require("./model/messages");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = 3001;
const uri = process.env.MANGODB_CONNECTION_STRING;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log('Mango DB is connected sucessfully')
});

app.post("/message", async(req,res) =>{
    try {
     console.log("req.body: ",req.body);

     const newMessage = new Message({
         Email: req.body.Email,
         Message: req.body.Message
     });
     
     await Message.create(newMessage);
     res.send("Message sent");
    }catch(err){
     console.log("error: ",err)
    }
})

app.listen(port,()=>{
    console.log(`App is listening at http://localhost${port}`)
})