import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const updateSubscriptionStatus = async (req, res) => {
    const { subscriptionId, subscriptionStatus } = req.body;
  
    try {
      const updated = await prisma.clientSubscription.update({
        where: { id: subscriptionId },
        data: { subscriptionStatus },
      });
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };