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
   type: String,
         required: true
    }
});
export default mongoose.model('Blogs',BlogsSchema);
