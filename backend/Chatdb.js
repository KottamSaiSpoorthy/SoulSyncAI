import mongoose from 'mongoose';
const chatschema = new mongoose.Schema({
    messege:String,
    reply:String,
});
export default mongoose.model("chat",chatschema);