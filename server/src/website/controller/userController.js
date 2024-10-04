// controllers/userController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create User
router.post('/', async (req, res) => {
  try {
    const { name, username, password, email, phoneNumber, role } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password,
        email,
        phoneNumber,
        role,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update User
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, password, email, phoneNumber, role } = req.body;
    const user = await prisma.user.update({
      where: { id: BigInt(id) },
      data: {
        name,
        username,
        password,
        email,
        phoneNumber,
        role,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete User
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
