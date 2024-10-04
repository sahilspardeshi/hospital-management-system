export const createAdvertisement = async (req, res) => {
    try {
      const { title, description, imageUrl } = req.body;
  
      // Validate required fields
      if (!title || !imageUrl) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const newAdvertisement = await prisma.advertisement.create({
        data: {
          title,
          description,
          imageUrl,
        },
      });
  
      res.status(201).json(newAdvertisement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  