// controllers/clientSubscriptionController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create ClientSubscription
router.post('/', async (req, res) => {
  try {
    const {
      clientId,
      planId,
      startDate,
      endDate,
      paymentMethodId,
      paymentStatus,
      subscriptionStatus,
    } = req.body;

    const clientSubscription = await prisma.clientSubscription.create({
      data: {
        clientId: clientId ? BigInt(clientId) : null,
        planId: planId ? BigInt(planId) : null,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        paymentMethodId: paymentMethodId ? BigInt(paymentMethodId) : null,
        paymentStatus,
        subscriptionStatus,
      },
    });

    res.status(201).json(clientSubscription);
  } catch (error) {
    console.error('Error creating client subscription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update ClientSubscription
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      clientId,
      planId,
      startDate,
      endDate,
      paymentMethodId,
      paymentStatus,
      subscriptionStatus,
    } = req.body;

    const clientSubscription = await prisma.clientSubscription.update({
      where: { id: BigInt(id) },
      data: {
        clientId: clientId ? BigInt(clientId) : undefined,
        planId: planId ? BigInt(planId) : undefined,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        paymentMethodId: paymentMethodId ? BigInt(paymentMethodId) : undefined,
        paymentStatus,
        subscriptionStatus,
      },
    });

    res.status(200).json(clientSubscription);
  } catch (error) {
    console.error('Error updating client subscription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete ClientSubscription
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const clientSubscription = await prisma.clientSubscription.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(clientSubscription);
  } catch (error) {
    console.error('Error deleting client subscription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
