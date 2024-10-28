import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const createPlan = async (req, res) => {
  const { planName, price, duration, features, clinet_subscription_id, paymentMethodIds } = req.body;
  
  try {
      // Step 1: Check if client subscription exists
      const clientSubscription = await prisma.clientSubscription.findUnique({
          where: { id: clinet_subscription_id },
      });

      if (!clientSubscription) {
          return res.status(404).json({ error: "Client subscription not found." });
      }

      // Step 2: Create the Subscription Plan
      const plan = await prisma.subscriptionPlan.create({
          data: {
              planName,
              price,
              duration,
              features,
              clientSubscription: {
                  connect: { id: clinet_subscription_id },
              },
              paymentMethods: {
                  connect: paymentMethodIds.map(id => ({ id })),
              }
          }
      });
      
      res.status(201).json(plan);
  } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(err);
  }
};
