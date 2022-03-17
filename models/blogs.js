import mongoose  from "mongoose";
const BlogsSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Body: {
         type: String,
         required: true
    },
    Author: {
        type: String,
        default:'GYSSAGARA Prince'
   },
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Blogs',BlogsSchema);