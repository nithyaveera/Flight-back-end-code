import mongoose  from "mongoose";

const FlightSchema   = new mongoose.Schema({
   FlightName: {
        type: String
    },
    FlightNumber: {
        type: String
    },
    startCity: {
        type: String
    },
    destination: {
        type: String
    },
    totalSeats: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    },
    TripStartTime: {
        type:String
    },
    TripEndTime: {
        type:String
    },
    TripDuration: {
        type:String
    }
});


const Flight  = mongoose.model("Flight", FlightSchema);
export default Flight ;
