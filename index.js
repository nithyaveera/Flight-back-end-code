import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./Database/config.js";
import userroutes from "./Routes/user.Route.js";
import flightroutes from "./Routes/flight.js";
import Bookedroutes from "./Routes/booked.routes.js";

dotenv.config()
const app = express()
const port=process.env.PORT
app.use(cors())
app.use(express.json())
connectdb()
app.use('/api', userroutes)
app.use('/flight', flightroutes)
app.use('/booking',Bookedroutes)
app.listen(port, () => {
    console.log(`port ${port} running`);
})