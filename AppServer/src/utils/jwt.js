// src/App/utils/jwt.js
import jwt from 'jsonwebtoken';

// Generate Access Token
export const generateAccessToken = (staff) => {
  return jwt.sign(
    { id: staff.Staff_id, user: staff.user, type: staff.type },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );
};

// Generate Refresh Token
export const generateRefreshToken = (staff) => {
  return jwt.sign(
    { id: staff.Staff_id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );
};

// Verify Access Token
export const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

// Verify Refresh Token
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
};
