// controllers/userCredentialsController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create UserCredentials
router.post('/', async (req, res) => {
  try {
    const { username, password, phone, role } = req.body;
    const userCredential = await prisma.userCredentials.create({
      data: {
        username,
        password,
        phone,
        role,
      },
    });
    res.status(201).json(userCredential);
  } catch (error) {
    console.error('Error creating user credentials:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update UserCredentials
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, phone, role } = req.body;
    const userCredential = await prisma.userCredentials.update({
      where: { id: BigInt(id) },
      data: {
        username,
        password,
        phone,
        role,
      },
    });
    res.status(200).json(userCredential);
  } catch (error) {
    console.error('Error updating user credentials:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete UserCredentials
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userCredential = await prisma.userCredentials.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(userCredential);
  } catch (error) {
    console.error('Error deleting user credentials:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
