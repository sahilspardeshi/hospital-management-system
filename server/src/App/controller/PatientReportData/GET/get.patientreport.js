import prisma from "../../../db/index.js";

export const getAllReports = async (req, res) => {
  try {
    const reports = await prisma.petientReportData.findMany({});

    return res.json({ data: reports });
  } catch (err) {
    console.error("Error fetching all reports: ", err.message);
    return res.status(500).json({ msg: "Failed to fetch reports", error: err.message });
  }
};


//************************************************************************************************* */
export const getReportById = async (req, res) => {
    const  report_id  = req.params.report_id;
  
    try {
      const report = await prisma.petientReportData.findUnique({
        where: { id: Number(report_id) }
      });
  
      if (!report) {
        return res.status(404).json({ msg: "Report not found" });
      }
  
      return res.json({ data: report });
    } catch (err) {
      console.error("Error fetching report by ID: ", err.message);
      return res.status(500).json({ msg: "Failed to fetch report", error: err.message });
    }
  };


//******************************************************************************************************* */
  export const getReportsByAppointmentId = async (req, res) => {
    const { appointment_id } = req.params;
  
    try {
      const reports = await prisma.petientReportData.findMany({
        where: {
          Appointments_OPD: {
            some: {
              id: Number(appointment_id) // Filter by appointment ID
            },
          },
        }
      });
  
      if (reports.length === 0) {
        return res.status(404).json({ msg: "No reports found for the given appointment" });
      }
  
      return res.json({ data: reports });
    } catch (err) {
      console.error("Error fetching reports by appointment ID: ", err.message);
      return res.status(500).json({ msg: "Failed to fetch reports", error: err.message });
    }
  };

//************************************************************************************************* */


export const getReportsByPatientId = async (req, res) => {
    const { patient_id } = req.params;
  
    try {
      const reports = await prisma.petientReportData.findMany({
        where: {
          petinet_id: Number(patient_id), // Filter by patient ID
        }
      });
  
      if (reports.length === 0) {
        return res.status(404).json({ msg: "No reports found for the given patient" });
      }
  
      return res.json({ data: reports });
    } catch (err) {
      console.error("Error fetching reports by patient ID: ", err.message);
      return res.status(500).json({ msg: "Failed to fetch reports", error: err.message });
    }
  };
  