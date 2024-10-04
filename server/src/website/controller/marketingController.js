// controllers/marketingController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Marketing
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, password, address, dob, hospital } = req.body;
    const marketing = await prisma.marketing.create({
      data: {
        name,
        phone,
        email,
        password,
        address,
        dob: new Date(dob),
        hospital,
      },
    });
    res.status(201).json(marketing);
  } catch (error) {
    console.error('Error creating marketing:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Marketing
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, password, address, dob, hospital } = req.body;
    const marketing = await prisma.marketing.update({
      where: { id: BigInt(id) },
      data: {
        name,
        phone,
        email,
        password,
        address,
        dob: dob ? new Date(dob) : undefined,
        hospital,
      },
    });
    res.status(200).json(marketing);
  } catch (error) {
    console.error('Error updating marketing:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Marketing
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const marketing = await prisma.marketing.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(marketing);
  } catch (error) {
    console.error('Error deleting marketing:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
