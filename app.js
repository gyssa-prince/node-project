import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app =express();
app.use(bodyParser.json());
app.use(cors());
import blogsRoute from './routes/blogs.js';
import loginRoute from './routes/auth.js';
import messageRoute from './routes/messages.js';
import subcribeRoute from './routes/subcribe.js';


//ROUTES
app.get('/', (req,res)=>{
    res.send('We are on home');
})
app.use('/blogs', blogsRoute);
app.use('/login', loginRoute);
app.use('/message', messageRoute);
app.use('/subcribe', subcribeRoute);


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
