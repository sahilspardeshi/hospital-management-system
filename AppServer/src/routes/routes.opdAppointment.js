import express from "express";
import { createAppointment ,deleteAppointment,getAllAppointments,getAppointmentById,searchAppointments,updateAppointment} from "../controller/AppointmentsOpd/index.js";

const opdAppointmentRoutes = express.Router();

opdAppointmentRoutes.route('/create').post(createAppointment);
opdAppointmentRoutes.route('/delete/:id').delete(deleteAppointment);
opdAppointmentRoutes.route('/update/:id').put(updateAppointment);
opdAppointmentRoutes.route('/AllAppointment').get(getAllAppointments)
opdAppointmentRoutes.route('/search').post(searchAppointments)
opdAppointmentRoutes.route('/:id').get(getAppointmentById);


export default opdAppointmentRoutes;