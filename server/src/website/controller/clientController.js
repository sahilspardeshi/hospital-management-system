// controllers/clientController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Client
router.post('/', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      password,
      address,
      dob,
      hospital,
      userCredentialId,
      settingId,
    } = req.body;

    const client = await prisma.client.create({
      data: {
        name,
        phone,
        email,
        password,
        address,
        dob: new Date(dob),
        hospital,
        userCredentialId: BigInt(userCredentialId),
        settingId: BigInt(settingId),
      },
    });

    res.status(201).json(client);
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Client
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      phone,
      email,
      password,
      address,
      dob,
      hospital,
      userCredentialId,
      settingId,
      updatedAt,
    } = req.body;

    const client = await prisma.client.update({
      where: { id: BigInt(id) },
      data: {
        name,
        phone,
        email,
        password,
        address,
        dob: dob ? new Date(dob) : undefined,
        hospital,
        userCredentialId: userCredentialId ? BigInt(userCredentialId) : undefined,
        settingId: settingId ? BigInt(settingId) : undefined,
        updatedAt: updatedAt ? new Date(updatedAt) : undefined,
      },
    });

    res.status(200).json(client);
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Client
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await prisma.client.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(client);
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
