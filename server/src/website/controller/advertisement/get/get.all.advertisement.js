import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all advertisements 
export const getAllAdvertisements = async (req, res) => {
  try {
    const advertisements = await prisma.advertisement.findMany();
    
    // convert BigInt id's to string for each advertisement by using map
    const newAds = advertisements.map(ad => ({
      ...ad,
      id: ad.id.toString()
    }));
    
    console.log(newAds);
    res.status(200).json(newAds);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
