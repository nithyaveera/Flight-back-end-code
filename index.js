import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from 'nodemailer';
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
app.use('/booking', Bookedroutes)
app.post('/mailer', (req, res) => {
    const {fullname,email,phone,message} = req.body;

    let mailTransporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"nithyaveeramani2003@gmail.com",
            pass:"dpjj lfcg ltmf zwes"
        }
    })
    let details={
        from:'SkyFlights',
        to:"vnihya.cr@jkkn.ac.in",
        subject:"Message From SkyFlights",
        html: `
        <div>
        <p>FullName : <b>${fullname}</b></p>
        <p>Email: <b>${email}</b> </p>
        <p>Phone Number : <b>${phone}</b></p>
        <p>Message : <b>${message}</b></p>
        </div>
        `
    }
 
    mailTransporter.sendMail(details,(err)=>{
        if(err){
            res.status(500).json({ message: "Failed to send email" });
        }else{
            res.status(200).json({ message: "Email sent successfully" });
        }
    }) 

})
app.listen(port, () => {
    console.log(`port ${port} running`);
})