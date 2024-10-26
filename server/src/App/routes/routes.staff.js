import express from 'express';
import { createStaff, deleteStaff,getStaffById ,updateStaff,getAllStaff} from '../controller/staff/index.js';

const staffRoutes = express.Router();
staffRoutes.route('/create').post(createStaff);
staffRoutes.route('/delete/:id').delete(deleteStaff);
staffRoutes.route('/:id').get(getStaffById);
staffRoutes.route('/update/:id').put(updateStaff);
staffRoutes.route('/getAll').get(getAllStaff);
export default staffRoutes;