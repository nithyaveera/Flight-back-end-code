import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
let connectionstring = process.env.MONGOCONNECTION

const connectdb = async () => {
    try {
        const dbconnect = await mongoose.connect(connectionstring)
        console.log("db connected!");
        return dbconnect
    } catch (error) {
        console.log(`error ${error}`);
    }
}

export default connectdb;