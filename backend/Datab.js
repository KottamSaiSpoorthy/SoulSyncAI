import mongoose from 'mongoose';
const connect = async ()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/soulsyncdb");
    console.log("DB Connected");
    }
    catch(e){
        console.log(e);
    }
}
export default connect;