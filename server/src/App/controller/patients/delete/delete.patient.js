import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//delete from Patient by id
export const deletePatient = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedPatient = await prisma.patients.delete({
        where: { id: BigInt(id) },
      });
      console.log(deletedPatient);
  
      return res.json({ 
        message: 'Staff deleted successfully',
        data: deletedPatient
    });
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ 
            error: 'Patient not found' 
        });
      }
      console.error('Error deleting Patient:', error.message);
      return res.status(500).json({ 
        error: 'Error deleting Patient' 
    });
    }
  };