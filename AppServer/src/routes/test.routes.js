
import express from 'express';
import { test } from '../controller/test/test.js';
const TestRoutes = express.Router();
// Define the route
TestRoutes.route('/check').get(test);

// Export the router
export default TestRoutes;
