// src/App/controller/register.js
import prisma from '../prisma/index.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  const { domain, hospital, password, feature, currentPlan } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { domain } });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        domain,
        hospital,
        hashedPassword,
        feature,
        currentPlan
      }
    });

    res.status(201).json({ msg: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
