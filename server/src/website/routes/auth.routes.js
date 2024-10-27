// import { login } from '../controller/auth.controller.js'; // Add .js extension for local file import
import express from 'express';
import { createUser, loginUser } from '../controller/user/create/create.user.js';
import { authenticateToken } from '../middlewares/auth-middleware.js';

const AuthRoutes = express.Router();

// Define the route
AuthRoutes.post('/register',createUser);
AuthRoutes.post('/login' ,authenticateToken  , loginUser)

// Export the router
export default AuthRoutes;
