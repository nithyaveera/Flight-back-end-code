import mongoose from "mongoose";

const BookedSchema = new mongoose.Schema({
    customerName: {
        type: String
    },
    customerEmail: {
        type:String
    },
    date: {
        type: String
    },
    flightid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flight",
    },
    bookingDate: {
        type:String
    },
    bookingStatus: {
        type:String
    },
    totalprice: {
        type:Number
    },
    numberOfTicket: {
        type:Number
    }
})

const bookeddetail = mongoose.model("BookedFlight", BookedSchema)
export default bookeddetail;