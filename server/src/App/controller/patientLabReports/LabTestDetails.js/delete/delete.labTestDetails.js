import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteLabReportDetail = async (req, res) => {
    const { detail_id } = req.params;
  
    try {
      const deletedDetail = await prisma.labTestDetails.delete({
        where: { id: Number(detail_id) },
      });
  
      res.status(200).json({
        msg: "Successfully deleted Lab Report Detail",
        deletedDetail,
      });
    } catch (error) {
      console.error("Error deleting Lab Report Detail:", error.message);
      res.status(500).json({ message: "Error deleting Lab Report Detail", error: error.message });
    }
  };
  