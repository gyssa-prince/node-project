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
        date: {
   type: String,
         required: true
    },
    Author: {
        type: String,
        default:'GYSSAGARA Prince'
   }
});
export default mongoose.model('Blogs',BlogsSchema);
