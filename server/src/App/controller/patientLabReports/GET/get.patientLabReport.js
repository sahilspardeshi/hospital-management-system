import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLabReport = async (req, res) => {
  const { id } = req.params;

  try {
    let labReport;

    if (id) {
      // Retrieve a single lab report by ID
      labReport = await prisma.labReports.findUnique({
        where: { id: Number(id) },
        include: {
          LabTestDetails: true, // Include associated details
          TechnicianReports: true, // Include associated technician reports
        },
      });

      if (!labReport) {
        return res.status(404).json({ message: "Lab Report not found" });
      }
    } else {
      // Retrieve all lab reports
      labReport = await prisma.labReports.findMany();
    }

    res.status(200).json({ labReport });
  } catch (error) {
    console.error("Error retrieving Lab Report:", error.message);
    res
      .status(500)
      .json({ message: "Error retrieving lab Report", error: error.message });
  }
};
