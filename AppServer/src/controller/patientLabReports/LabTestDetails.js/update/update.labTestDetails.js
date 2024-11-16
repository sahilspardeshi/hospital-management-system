import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateLabTestDetails = async (req, res) => {
    const { detail_id } = req.params;
    const { parameter_name, parameter_value, normal_range } = req.body;
  
    try {
      const updatedDetail = await prisma.labTestDetails.update({
        where: { id: Number(detail_id) },
        data: {
          parameter_name,
          parameter_value,
          normal_range,
        },
      });
  
      res.status(200).json({
        msg: "Successfully updated Lab Report Detail",
        updatedDetail,
      });
    } catch (error) {
      console.error("Error updating Lab Report Detail:", error.message);
      res.status(500).json({ message: "Error updating Lab Report Detail", error: error.message });
    }
  };
  