
  // Get a single Marketing record by ID
  export const getAllAdvertisements = async (req, res) => {
    try {
      const advertisements = await prisma.advertisement.findMany();
      res.status(200).json(advertisements);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  