import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Create a new Patient 
export const createPatient = async (req, res) => {
    const {patientName, age, gender, blood_group, mobileNo, address, email} = req.body;
   
    try {
      const newPatient = await prisma.petients.create({
        data: {
            fullName:patientName, 
            date_of_birth:age, 
            gender, 
            blood_group, 
            mobile_number:mobileNo, 
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