import mongoose  from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    Email: {
        type:String,
        require:true,
    },
    Password: {
        type:String,
        require:true,
    },
});
const admin =mongoose.model("admin",adminSchema);

export default admin;