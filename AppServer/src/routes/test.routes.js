
import express from 'express';
import { createAppointment } from '../controller/test/test.js';
const TestRoutes = express.Router();
// Define the route
TestRoutes.route('/check').post(createAppointment);

// Export the router
export default TestRoutes;
