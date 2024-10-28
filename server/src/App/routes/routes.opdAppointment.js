import express from "express";
import { createAppointment ,deleteAppointment,getAllAppointments,getAppointmentById,updateAppointment} from "../controller/AppointmentsOpd/index.js";

const opdAppointmentRoutes = express.Router();

opdAppointmentRoutes.route('/create').post(createAppointment);
opdAppointmentRoutes.route('/delete/:id').delete(deleteAppointment);
opdAppointmentRoutes.route('/update/:id').put(updateAppointment);
opdAppointmentRoutes.route('/:id').get(getAppointmentById);
opdAppointmentRoutes.route('/allappointments').get(getAllAppointments);

export default opdAppointmentRoutes;