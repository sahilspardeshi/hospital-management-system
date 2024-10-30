import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Create a new Patient 
export const createPatient = async (req, res) => {
    const {fullName, date_of_birth, gender, blood_group, mobile_number, address, email} = req.body;
  
    try {
      const newPatient = await prisma.petients.create({
        data: {
            fullName, 
            date_of_birth, 
            gender, 
            blood_group, 
            mobile_number, 
            address, 
            email
        },
      });
      
      return res.status(201).json({
        msg:"success",
        data: newPatient,
    });
    } catch (error) {
      console.error('Error creating Patient:', error.message);
      return res.status(500).json({ error: 'Error creating Patient' });
    }
  };