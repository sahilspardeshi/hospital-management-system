// controllers/advertisementController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Advertisement
router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const advertisement = await prisma.advertisement.create({
      data: {
        title,
        description,
        imageUrl,
      },
    });
    res.status(201).json(advertisement);
  } catch (error) {
    console.error('Error creating advertisement:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Advertisement
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl } = req.body;
    const advertisement = await prisma.advertisement.update({
      where: { id: BigInt(id) },
      data: {
        title,
        description,
        imageUrl,
      },
    });
    res.status(200).json(advertisement);
  } catch (error) {
    console.error('Error updating advertisement:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Advertisement
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const advertisement = await prisma.advertisement.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(advertisement);
  } catch (error) {
    console.error('Error deleting advertisement:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
