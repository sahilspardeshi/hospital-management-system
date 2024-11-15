import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); 

// Get an Advertisement record by ID
export const getAdvertisementById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if 'id' exists in the request parameters
    if (!id) {
      return res.status(400).json({ error: 'Advertisement ID is required' });
    }

    // Ensure the 'id' is a valid number or string that can be converted to BigInt
    let advertisementId;
    try {
      advertisementId = BigInt(id);  // Try to convert to BigInt
    } catch (error) {
      return res.status(400).json({ error: 'Invalid Advertisement ID format' });
    }

    // Find the advertisement by ID using Prisma
    const advertisement = await prisma.advertisement.findUnique({
      where: { id: advertisementId },
    });

    if (!advertisement) {
      return res.status(404).json({ error: 'Advertisement not found' });
    }

    // Convert BigInt into string
    const advertise = {
      ...advertisement,
      id: advertisement.id.toString(),  // Convert BigInt id to string
    };

    res.status(200).json(advertise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
