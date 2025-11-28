import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const infoschema = new mongoose.Schema({
    email:String,
    FirstName:String,
    LastName:String,
    DOB:String,
    username:String,
    password:String,
    role:{type:String,default:"user"},
});
infoschema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,8);
    next();
});
export default mongoose.model("info",infoschema);