import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



// Update a Lab Report by ID
export const updateLabReport = async (req, res) => {
    const { id } = req.params;
    const {
      test_name,
      test_date,
      test_result,
      test_file,
      labTest_count,
      cost,
      paid,
      lab_technician,
      status,
    } = req.body;
  
    try {
      const updatedReport = await prisma.labReports.update({
        where: { id: Number(id) },
        data: {
          test_name,
          test_date,
          test_result,
          test_file,
          labTest_count,
          cost,
          paid,
          lab_technician,
          status,
        },
      });
  
      res.status(200).json({
        msg: "Successfully updated Lab Report",
        updatedReport,
      });
    } catch (error) {
      console.error("Error updating Lab Report:", error.message);
      res.status(500).json({ message: "Error updating lab Report", error: error.message });
    }
  };