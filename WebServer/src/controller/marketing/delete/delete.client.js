
export const deleteMarketing = async (req, res) => {
    try {
      const { id } = req.params;
  
      await prisma.marketing.delete({
        where: { id: BigInt(id) },
      });
  
      res.status(204).send(); // No Content
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        // Record not found
        res.status(404).json({ error: 'Marketing record not found' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
  