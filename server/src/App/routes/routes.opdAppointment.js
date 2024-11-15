import express from "express";
import { createAppointment ,deleteAppointment,getAllAppointments,getAppointmentById,searchAppointments,updateAppointment} from "../controller/AppointmentsOpd/index.js";

const opdAppointmentRoutes = express.Router();

opdAppointmentRoutes.route('/create').post(createAppointment);
opdAppointmentRoutes.route('/delete/:id').delete(deleteAppointment);
opdAppointmentRoutes.route('/update/:id').put(updateAppointment);
opdAppointmentRoutes.route('/:id').get(getAppointmentById);
opdAppointmentRoutes.route('/allappointments').get(getAllAppointments);
opdAppointmentRoutes.route('/search').post(searchAppointments)

export default opdAppointmentRoutes;