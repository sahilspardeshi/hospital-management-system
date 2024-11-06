import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteLabReport = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReport = await prisma.labReports.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      msg: "Successfully deleted Lab Report",
      deletedReport,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Patient Medication not found" });
    }

    console.error("Error deleting Lab Report:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting lab Report", error: error.message });
  }
};
