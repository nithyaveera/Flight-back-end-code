import express from "express";
import { Createbooking,bookdetails } from "../controller/Bookedcontroller.js";
import { verifyJWT } from "../Middleware/Auth.middleware.js";

const routes = express.Router()
routes.post('/createbooking', verifyJWT, Createbooking)
routes.get('/bookeddetails/:customerEmail',bookdetails)

export default routes;