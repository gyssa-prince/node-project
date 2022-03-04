const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
    Email: {
        type:String,
        require:true,
    },
    Message: {
        type:String,
        require:true,
    },
    Time : { type : Date, default: Date.now }
});

const Message =mongoose.model("messages",messagesSchema);

module.exports = Message;