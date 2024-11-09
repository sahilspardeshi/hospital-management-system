import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const deleteTechnicianReport = async (req, res) => {
    const { technician_report_id } = req.params;
  
    try {
      const deletedTechnicianReport = await prisma.technicianReports.delete({
        where: { technician_report_id: Number(technician_report_id) },
      });
  
      res.status(200).json({
        msg: "Successfully deleted Technician Report",
        deletedTechnicianReport,
      });
    } catch (error) {
      console.error("Error deleting Technician Report:", error.message);
      res.status(500).json({ message: "Error deleting Technician Report", error: error.message });
    }
  };
  