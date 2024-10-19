import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//delete from staff by id
export const deleteStaff = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedStaff = await prisma.staff.delete({
        where: { Staff_id: BigInt(id) },
      });
      console.log(deletedStaff);
  
      return res.json({ message: 'Staff deleted successfully' });
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Staff not found' });
      }
      console.error('Error deleting staff:', error.message);
      return res.status(500).json({ error: 'Error deleting staff' });
    }
  };