export const updateAdvertisement = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, imageUrl } = req.body;
  
      // Prepare the data to update
      const data = {};
      if (title) data.title = title;
      if (description) data.description = description;
      if (imageUrl) data.imageUrl = imageUrl;
  
      const updatedAdvertisement = await prisma.advertisement.update({
        where: { id: BigInt(id) },
        data,
      });
  
      res.status(200).json(updatedAdvertisement);
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        // Record not found
        res.status(404).json({ error: 'Advertisement not found' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
  