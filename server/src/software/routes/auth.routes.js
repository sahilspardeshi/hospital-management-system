
import express from 'express';

const AuthRoutes = express.Router();

// Define the route
AuthRoutes.get('/login');

// Export the router
export default AuthRoutes;
