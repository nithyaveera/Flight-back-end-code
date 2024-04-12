import express from "express";
import { createFlight, getFlightById,  searchflight} from "../controller/flightcontroll.js";
import  { middleware, verifyJWT } from "../Middleware/Auth.middleware.js";


const routes = express.Router()
routes.get('/getflight/:id',getFlightById)
routes.post('/createflights',middleware,createFlight)
routes.post('/searchflight',verifyJWT,searchflight)

export default routes