// src/App/utils/authMiddleware.js
import { verifyAccessToken } from './jwt.js';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'No token provided' });

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ msg: 'Token is invalid or expired' });
  }
};
