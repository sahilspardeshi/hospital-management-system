import { PrismaClient } from '@prisma/client';

let prisma =  new PrismaClient();

// Function to create a new Setting record
export const createSetting = async (req,res) => {
    const {domain,icon,hospital,current_plan,feature}=req.body;
  try {
    const setting = await prisma.setting.create({
      data: {
        domain: domain,
        icon: icon,
        hospital: hospital,
        current_plan: current_plan,
        feature: feature,
      },
    });
    console.log(setting);
    
    res.json({msg:'succesfully created setting'});
  } catch (error) {
    console.error('Error creating setting:', error.message);
    throw error; // Re-throw the error for further handling
  }
};

// Function to update an existing Setting record
