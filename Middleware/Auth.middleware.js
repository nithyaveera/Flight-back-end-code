import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import dotenv from 'dotenv';

dotenv.config()

export const middleware =async (req, res, next) => {
    const token = req.header('Authorization') 
    if(!token){
    return res.status(401).json({message:"token is missing"})
}

try {
    const decoded= jwt.verify(token,process.env.JWT_SECRET)
    req.user= decoded
    const user = await User.findById(req.user._id)

    if(user.role != 'admin'){
        return res.status(401).json({message:"Access Deny"})
    }

    next()             

} catch (error) {
    console.log(error);
    res.status(500).json({message:"Invalid token , internal server error"})
}
}

export const verifyJWT = async (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({ message: "token is missing" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        const user = await User.findById(req.user._id)

        if (user.role != 'user') {
            return res.status(401).json({ message: "Access Deny" })
        }

        next()

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Invalid token , internal server error" })
    }
}