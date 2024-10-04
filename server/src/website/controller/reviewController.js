// controllers/reviewController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Review
router.post('/', async (req, res) => {
  try {
    const { image, rating, reviewText } = req.body;
    const review = await prisma.review.create({
      data: {
        image,
        rating,
        reviewText,
      },
    });
    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Review
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { image, rating, reviewText } = req.body;
    const review = await prisma.review.update({
      where: { id: BigInt(id) },
      data: {
        image,
        rating,
        reviewText,
      },
    });
    res.status(200).json(review);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Review
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const review = await prisma.review.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(review);
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
