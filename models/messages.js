import mongoose  from "mongoose";
const MessageSchema = mongoose.Schema({
   Email: {
        type: String,
        required: true
    },
    Message: {
         type: String,
         required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Message',MessageSchema);