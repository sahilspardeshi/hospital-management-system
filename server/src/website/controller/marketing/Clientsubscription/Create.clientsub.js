import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createClientSub = async (req, res) => {
   
    try {
      const { clientId, startDate, endDate, paymentStatus
        , subscriptionStatus, subscriptionPlanId } = req.body;
  
      const clientSubscription = await prisma.clientSubscription.create({
        data: {
          clientId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          paymentStatus,
          subscriptionStatus,
          subscriptionPlan: {
            connect: { id: subscriptionPlanId },
          },
        },
      });
      res.status(201).json(clientSubscription);
    } catch (err) {
      res.status(500).json({ error: 'Subscription creation failed' });
    }
  };