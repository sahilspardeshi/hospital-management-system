// controllers/settingController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Setting
router.post('/', async (req, res) => {
  try {
    const { imageUrl, hospital, domain } = req.body;
    const setting = await prisma.setting.create({
      data: {
        imageUrl,
        hospital,
        domain,
      },
    });
    res.status(201).json(setting);
  } catch (error) {
    console.error('Error creating setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Setting
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { imageUrl, hospital, domain } = req.body;
    const setting = await prisma.setting.update({
      where: { id: BigInt(id) },
      data: {
        imageUrl,
        hospital,
        domain,
      },
    });
    res.status(200).json(setting);
  } catch (error) {
    console.error('Error updating setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Setting
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const setting = await prisma.setting.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(setting);
  } catch (error) {
    console.error('Error deleting setting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
