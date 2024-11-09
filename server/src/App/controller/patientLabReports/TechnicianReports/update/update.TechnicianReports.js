import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateTechnicianReport = async (req, res) => {
    const { technician_report_id } = req.params;
    const { technician_notes } = req.body;
  
    try {
      const updatedTechnicianReport = await prisma.technicianReports.update({
        where: { technician_report_id: Number(technician_report_id) },
        data: { technician_notes },
      });
  
      res.status(200).json({
        msg: "Successfully updated Technician Report",
        updatedTechnicianReport,
      });
    } catch (error) {
      console.error("Error updating Technician Report:", error.message);
      res.status(500).json({ message: "Error updating Technician Report", error: error.message });
    }
  };
  