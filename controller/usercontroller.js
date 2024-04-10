import User from "../models/UserSchema.js";
import bcryptjs from "bcryptjs"
import dotenv from "dotenv"
import jwt from "jsonwebtoken";

dotenv.config()
//register
export const registeruser = async (req, res) => {
    try {
    const { name, email, password, phonenumber, dateofbirth,role } = req.body
    const hashpassword = await bcryptjs.hash(password, 10)
    
    const newuser = new User({ name, email, password: hashpassword, phonenumber, dateofbirth ,role})
    await newuser.save()
        
    res.status(200).json({message:"Register SuccessFull"})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"register failed"})
    }
    
}

//login

export const loginUser = async (req, res) => {
    try {
        const {email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({message:"User not Found"})
        }
        const passwordmatch = await bcryptjs.compare(password, user.password)
        if (!passwordmatch) {
            return res.status(401).json({message:"Invaild Password"})
        }
        const token = jwt.sign({ _id: user.id },process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({message:"Login Successfull",token:token})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Error"})
    }
}

export const updatepassword =async (req, res) => {
    try {
        const {email}= req.params
        const { password } = req.body
        const hashpassword = await bcryptjs.hash(password, 10)
        const result = await User.updateOne({email},{password:hashpassword})
        if(result.matchedCount === 0){
            return res.status(400).json({message:"emp not found"})
        }
        const updateEmp = await User.find({email})
        res.status(200).json({message:"update Password success",data:updateEmp})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}