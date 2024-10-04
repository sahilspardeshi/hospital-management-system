  // Update a Marketing record
  export const getAdvertisementById = async (req, res) => {
    try {
      const { id } = req.params;
      const advertisement = await prisma.advertisement.findUnique({
        where: { id: BigInt(id) },
      });
  
      if (!advertisement) {
        return res.status(404).json({ error: 'Advertisement not found' });
      }
  
      res.status(200).json(advertisement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };