import prisma from "../../../db/index.js";

export const updatePatientReport = async (req, res) => {
  const { id } = req.params; // Assuming the ID is passed as a URL parameter
  const { title, discription, status } = req.body;

  try {
    // Find the existing report by ID
    const existingReport = await prisma.petientReportData.findUnique({
      where: { id: Number(id) },
    });

    // If the report doesn't exist, return a 404 response
    if (!existingReport) {
      return res.status(404).json({ msg: "Report not found" });
    }

    // Update the report data
    const updatedReport = await prisma.petientReportData.update({
      where: { id: Number(id) },
      data: {
        title: title || existingReport.title, // Retain current value if not provided
        discription: discription || existingReport.discription, // Retain current value if not provided
        status: status || existingReport.status, // Retain current value if not provided
        updated_at: new Date(), // Update the timestamp
      },
    });

    // Return the updated report
    res.json({ msg: "Report updated successfully", data: updatedReport });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error updating report", error: err.message });
  }
};
