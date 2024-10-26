
import express from 'express';
import { staffLogin,refreshToken } from '../controller/staff/staffLogin.js';
import { authenticateToken } from '../Middlewares/staff/accessTokenMiddleware.js';

const AuthRoutes = express.Router();

// Define the route
AuthRoutes.get('/login',staffLogin);
AuthRoutes.post('/refresh-token',refreshToken);
AuthRoutes.get('/protected',authenticateToken,(req,res)=>{
 res.json({msg:"Token is valid"});
})
// Export the router
export default AuthRoutes;
