import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to delete a Setting record by ID
export const deleteSetting = async (req, res) => {
  const { id } = req.params; // Get the id from the request parameters

  try {
    
    // Delete the setting from the database
    const deletedSetting = await prisma.setting.delete({
      where: { id: BigInt(id) }, // Use the converted BigInt id
    });

    // Convert BigInt to string for serialization
    deletedSetting.id = deletedSetting.id.toString();

    // Send a success response
    return res.json({ message: 'Setting deleted successfully', deletedSetting });
  } catch (error) {
    if (error.code === 'P2025') {
      // Handle case where the setting does not exist
      return res.status(404).json({ error: 'Setting not found' });
    }
    console.error('Error deleting setting:', error.message);
    return res.status(500).json({ error: 'Error deleting setting' });
  }
};