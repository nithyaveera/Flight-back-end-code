import Flight from '../models/FlightSchema.js';


export const createFlight = (req, res) => {
try {
    Flight.create(req.body)
      res.json({ msg: "Flight added successfully" })
} catch (error) {
    res.status(400).json({ message:"deny"})
}  
    
};

export const searchflight = async(req,res) => {
  try {
    const {startCity, destination} = req.body
    const result =await Flight.find({ 'startCity': startCity, 'destination': destination })
    if (result.length == 0 ) {
      return res.status(400).json({message:"Flight not found"})
    }
    res.status(200).json({data:result,info:`Flights from ${startCity} to ${destination}`})
  } catch (error) {
    res.status(500).json({message:"inernal server error"})
  }
}

export const getFlightById = async (req, res) => {
   try {
    const flight = await Flight.findOne({ _id: req.params.id })

    if (!flight) {
      return res
        .status(404)
        .json({ message: "Flight not found" });
    }
     res.status(200).json({ data: flight });
   } catch (error) {
     res.status(500).json({message:"internal server error"})
   }
  
};