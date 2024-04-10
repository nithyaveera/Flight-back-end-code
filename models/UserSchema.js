import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phonenumber: Number,
    dateofbirth: String,
    role:String 
})

const User = mongoose.model("user", Userschema)
export default User;
