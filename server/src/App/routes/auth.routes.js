import express from 'express';

import { login, logout, refreshToken } from '../controller/staff/index.js';
const AuthRoutes = express.Router();

AuthRoutes.post('/login',login);
AuthRoutes.post('/logout', logout);
AuthRoutes.post('/refresh', refreshToken);


export default AuthRoutes;



