import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); 

// Get an Advertisement record by ID
export const getAdvertisementById = async (req, res) => {
  try {
    const { id } = req.params;
    const advertisement = await prisma.advertisement.findUnique({
      where: { id: BigInt(id) },
    });

    if (!advertisement) {
      return res.status(404).json({ error: 'Advertisement not found' });
    }

    // Convert BigInt into string
    const advertise= {
      ...advertisement,
      id: advertisement.id.toString(), 
    };

    res.status(200).json(advertise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
