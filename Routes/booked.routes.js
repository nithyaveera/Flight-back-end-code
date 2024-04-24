import express from "express";
import { Createbooking,bookdetails, deleteBookingById } from "../controller/Bookedcontroller.js";
import { verifyJWT } from "../Middleware/Auth.middleware.js";

const routes = express.Router()
routes.post('/createbooking', verifyJWT, Createbooking)
routes.get('/bookeddetails/:customerEmail', bookdetails)
routes.delete('/deletedeails/:id',deleteBookingById)

export default routes;