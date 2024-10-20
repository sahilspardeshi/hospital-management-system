// src/App/controller/auth.js
import prisma from '../prisma/index.js';
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.js';

import express from 'express';

const AuthRoutes = express.Router();

// Define the route
AuthRoutes.get('/login');

export default AuthRoutes;


