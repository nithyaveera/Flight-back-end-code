import bookeddetail from "../models/BookedShema.js";
import Flight from "../models/FlightSchema.js"

export const Createbooking = async (req, res) => {
    try {
        const { customerName,customerEmail, date, flightid, totalprice,numberOfTicket } = req.body;
        const flight = await Flight.findOne({ _id: flightid })
        if ((!flight)) {
            return res.status(400).json({ message: 'Flight not available' })
        }
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
            const day = String(currentDate.getDate()).padStart(2, '0');
            const dateOnly = `${year}-${month}-${day}`;

            const newuser = new bookeddetail({ customerName,customerEmail, date, flightid, bookingDate:dateOnly, bookingStatus: "booked", totalprice ,numberOfTicket})
            await newuser.save()
        res.status(200).json({ message: "Booking Confirm" });
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}

export const bookdetails = async (req, res) => {
    try {
        const {customerEmail} = req.params;
        const customerBookingDetails = await bookeddetail.find({ 'customerEmail':customerEmail })
        console.log(customerBookingDetails);
        if(customerBookingDetails.length === 0) {
            return res.status(400).json({msg:'Not yet Booked'})
        }
        res.status(200).json({data:customerBookingDetails})
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
    }
}
    