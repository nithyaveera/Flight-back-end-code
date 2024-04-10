import express from "express";
import { loginUser, registeruser, updatepassword } from "../controller/usercontroller.js";

const routes = express.Router()

routes.post('/register',registeruser)
routes.post('/login', loginUser)
routes.put('/updatepassword/:email',updatepassword)

export default routes;