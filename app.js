import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app =express();
app.use(bodyParser.json());
import blogsRoute from './routes/blogs.js';
import loginRoute from './routes/auth.js';

//Enable CORS
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

//ROUTES
app.get("/", function (req, res, next) {
  res.send("We are on home!!!");
});
  app.post('/', function(req, res, next) {
    // Handle the post for this route
  })
app.use('/blogs', blogsRoute);
app.use('/login', loginRoute);



//Connection to DB

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log('Mango DB is connected sucessfully')
});
//To listen the server
app.listen(process.env.PORT || 3000);
