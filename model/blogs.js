import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    Title: {
        type:String,
        require:true,
    },
    Body: {
        type:String,
        require:true,
    },
    Author: {
        type:String,
        default:'GYSSAGARA Prince',
    },
    Time : { type : Date, default: Date.now }
});
const Blog =mongoose.model("Blog",blogsSchema);

export default Blog;