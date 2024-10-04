// controllers/paymentMethodController.js

const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create PaymentMethod
router.post('/', async (req, res) => {
  try {
    const { methodName, paymentId } = req.body;
    const paymentMethod = await prisma.paymentMethod.create({
      data: {
        methodName,
        paymentId,
      },
    });
    res.status(201).json(paymentMethod);
  } catch (error) {
    console.error('Error creating payment method:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update PaymentMethod
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { methodName, paymentId } = req.body;
    const paymentMethod = await prisma.paymentMethod.update({
      where: { id: BigInt(id) },
      data: {
        methodName,
        paymentId,
      },
    });
    res.status(200).json(paymentMethod);
  } catch (error) {
    console.error('Error updating payment method:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete PaymentMethod
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const paymentMethod = await prisma.paymentMethod.delete({
      where: { id: BigInt(id) },
    });
    res.status(200).json(paymentMethod);
  } catch (error) {
    console.error('Error deleting payment method:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
