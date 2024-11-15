import { PrismaClient } from '@prisma/client';

let prisma =  new PrismaClient();


export const updateSetting = async (req, res) => {
    try {
      const {id}= req.params;
      const {domain,icon,hospital,current_plan} = req.body;
      const setting = await prisma.setting.update({
        where: {  id: BigInt(id)},
        data: {
          domain: domain,
          icon: icon,
          hospital: hospital,
          current_plan: new Date(current_plan),
          updated_at: new Date(), // Update the timestamp
        },
      });
      console.log(setting);
      res.json({'msg':"Succefully Updated"});
    } catch (error) {
      console.error('Error updating setting:', error.message);
      throw error; // Re-throw the error for further handling
    }
  };