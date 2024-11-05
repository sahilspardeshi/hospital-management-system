import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTechnicianReport = async (req, res) => {
  const { report_id, technician_id, technician_notes } = req.body;

  try {
    // Check if the lab report exists
    const labReport = await prisma.labReports.findUnique({
      where: { id: report_id },
    });

    if (!labReport) {
      return res.status(404).json({ message: "Lab Report not found" });
    }

    // Create the new Technician Report
    const newTechnicianReport = await prisma.technicianReports.create({
      data: {
        report_id,
        technician_id,
        technician_notes,
      },
    });

    res.status(201).json({
      msg: "Successfully created Technician Report",
      newTechnicianReport,
    });
  } catch (error) {
    console.error("Error creating Technician Report:", error.message);
    res.status(500).json({ message: "Error creating Technician Report", error: error.message });
  }
};
