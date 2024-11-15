export const getAllMarketing = async (req, res) => {
    try {
      const marketings = await prisma.marketing.findMany();
      res.status(200).json(marketings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  