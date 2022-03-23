import mongoose  from "mongoose";
const CommentSchema = mongoose.Schema({
 Blogid: {
        type: String,
        required: true
    },
    Comment: {
         type: String,
         required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Comments',CommentSchema);