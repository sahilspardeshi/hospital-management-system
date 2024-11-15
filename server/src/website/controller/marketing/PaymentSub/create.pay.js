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
console.log(paymentMethod)

  //converting bigint into string
  const paymenthod= {
    ...paymentMethod,
    id: paymentMethod.id.toString()
};
      res.status(201).json(paymenthod);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};
