import prisma from '../prisma/index.js';
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.js';

export const login = async (req, res) => {
    const { domain, hospital, password } = req.body;
  
    try {
      const user = await prisma.user.findUnique({
        where: { domain }
      });
  
      if (!user || user.hospital !== hospital) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const validPassword = await bcrypt.compare(password, user.hashedPassword);
      if (!validPassword) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
  
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken }
      });
  
      res.json({ accessToken, refreshToken });
    } catch (err) {
      res.status(500).json({ msg: 'Server error', error: err.message });
    }
  };
  
  export const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ msg: 'Refresh token required' });
  
    try {
      const decoded = verifyRefreshToken(refreshToken);
      const user = await prisma.user.findUnique({
        where: { id: decoded.id }
      });
  
      if (!user || user.refreshToken !== refreshToken) {
        return res.status(403).json({ msg: 'Invalid refresh token' });
      }
  
      const newAccessToken = generateAccessToken(user);
      res.json({ accessToken: newAccessToken });
    } catch (err) {
      res.status(403).json({ msg: 'Invalid refresh token', error: err.message });
    }
  };
  
