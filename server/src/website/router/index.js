import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import
import advertisement from '../routes/Advertisment.js';

const AllRoutes = express();

// Define the route
AllRoutes.use('/auth', AuthRoutes);
AllRoutes.use('/advertisement',advertisement);
// Export the router
export default AllRoutes;
