import express from 'express';
import { createStaff, deleteStaff,getStaffById ,updateStaff,getAllStaff,getStaffByName} from '../controller/staff/index.js';

const staffRoutes = express.Router();
staffRoutes.route('/create').post(createStaff);
staffRoutes.route('/getAll').get(getAllStaff); 
staffRoutes.route('/getByName/:name').post(getStaffByName); 
staffRoutes.route('/delete/:id').delete(deleteStaff);
staffRoutes.route('/:id').get(getStaffById);
staffRoutes.route('/update/:id').put(updateStaff);



export default staffRoutes;