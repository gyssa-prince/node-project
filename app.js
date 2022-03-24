import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Grid from 'gridfs-stream';

dotenv.config();
const app =express();
app.use(bodyParser.json());
import blogsRoute from './routes/blogs.js';
import loginRoute from './routes/auth.js';
import messageRoute from './routes/messages.js';
import subcribeRoute from './routes/subcribe.js';
import commentRoute from './routes/comments.js';

let gfs;
//ROUTES
app.get('/', (req,res)=>{
    res.send('We are on home');
})
app.use('/blogs', blogsRoute);
app.use('/login', loginRoute);
app.use('/message', messageRoute);
app.use('/subcribe', subcribeRoute);
app.use('/comment', commentRoute);



//Connection to DB

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log('Mango DB is connected sucessfully')
    gfs = Grid(connection.db, mongoose.mongo);
    gfs.collection("photos");
});

// media routes
app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

//To listen the server
app.listen(process.env.PORT || 3000);
export default app;
