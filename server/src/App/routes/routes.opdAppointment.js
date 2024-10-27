import express from "express";
import { createAppointment } from "../controller/AppointmentsOpd/index.js";

const opdAppointmentRoutes = express.Router();

opdAppointmentRoutes.post("/create",createAppointment);

export default opdAppointmentRoutes;