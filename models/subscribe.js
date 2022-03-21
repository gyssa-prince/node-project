import mongoose  from "mongoose";
const SubcribeSchema = mongoose.Schema({
   Email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Subcribe',SubcribeSchema);