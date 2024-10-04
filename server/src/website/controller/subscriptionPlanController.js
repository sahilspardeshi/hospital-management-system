// controllers/subscriptionPlanController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create SubscriptionPlan
router.post('/', async (req, res) => {
  try {
    const { planName, price, duration, features } = req.body;
    const subscriptionPlan = await prisma.subscriptionPlan.create({
      data: {
        planName,
        price,
        duration,
        features,
      },
    });
    res.status(201).json(subscriptionPlan);
  } catch (error) {
    console.error('Error creating subscription plan:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update SubscriptionPlan
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { planName, price, duration, features } = req.body;
    const subscriptionPlan = await prisma.subscriptionPlan.update({
      where: { id: BigInt(id) },
      data: {
        planName,
        price,
        duration,
        features,
      },
    });
    res.status(200).json(subscriptionPlan);
  } catch (error) {
    console.error('Error updating subscription plan:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete SubscriptionPlan
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const subscriptionPlan = await prisma.subscriptionPlan.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(subscriptionPlan);
  } catch (error) {
    console.error('Error deleting subscription plan:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
