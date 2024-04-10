import express from "express";
import { createFlight, getFlightById,  searchflight} from "../controller/flightcontroll.js";
import  { verifyJWT } from "../Middleware/Auth.middleware.js";


const routes = express.Router()
routes.get('/getflight/:id',getFlightById)
routes.post('/createflights',createFlight)
routes.post('/searchflight',verifyJWT,searchflight)

export default routes