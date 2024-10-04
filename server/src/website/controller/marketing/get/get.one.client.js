export const getMarketingById = async (req, res) => {
    try {
      const { id } = req.params;
      const marketing = await prisma.marketing.findUnique({
        where: { id: BigInt(id) },
      });
  
      if (!marketing) {
        return res.status(404).json({ error: 'Marketing record not found' });
      }
  
      res.status(200).json(marketing);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
