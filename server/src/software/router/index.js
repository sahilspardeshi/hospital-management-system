import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import

const AllRoutes = express();

// Define the route
AllRoutes.use('/auth', AuthRoutes);

// Export the router
export default AllRoutes;
