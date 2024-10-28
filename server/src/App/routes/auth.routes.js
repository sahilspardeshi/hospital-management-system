import express from 'express';
import { authenticateToken } from '../middleware/verify.js';
import { login, logout, refreshToken } from '../controller/staff/index.js';
const AuthRoutes = express.Router();

auth.post('/login',login);
auth.post('/logout', logout);
auth.post('/refresh', refreshToken);
AuthRoutes.get('/protected', authenticateToken, (req, res) => {
  res.json({ msg: "Token is valid" });
});

export default AuthRoutes;



