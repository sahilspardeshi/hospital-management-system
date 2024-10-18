import { PrismaClient } from '@prisma/client';

let prisma =  new PrismaClient();


export const getSetting = async (req, res) => {
    const { id } = req.params; // Get the id from the request parameters
  
    try {
      
      
  
      // Fetch the setting from the database
      const setting = await prisma.setting.findUnique({
        where: { id: BigInt(id) }, 
      });
  
      // Check if the setting exists
      if (!setting) {
        return res.status(404).json({ error: 'Setting not found' });
      }
  
      // Convert BigInt to string for serialization
      setting.id = setting.id.toString();
  
      // Send the setting as a response
      return res.json({setting});
    } catch (error) {
      console.error('Error fetching setting:', error.message);
      return res.status(500).json({ error: 'Error fetching setting' });
    }
  };