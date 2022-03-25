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
   },
        Picture: {
        type: String,
        default:'img/tour.webp'
   }
});
export default mongoose.model('Blogs',BlogsSchema);
