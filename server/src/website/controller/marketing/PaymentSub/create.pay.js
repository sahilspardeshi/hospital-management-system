import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPaymentMethod = async (req, res) => {
  const { methodName, paymentId, plan_id } = req.body;

  try {
      // Check if the subscription plan exists
      const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
          where: { id: plan_id },
      });

      if (!subscriptionPlan) {
          return res.status(404).json({ error: "Subscription Plan not found." });
      }

      // Create the payment method
      const paymentMethod = await prisma.paymentMethod.create({
          data: {
              methodName,
              paymentId,
              subscriptionPlan: {
                  connect: { id: plan_id },
              }
          }
      });

      res.status(201).json(paymentMethod);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};
