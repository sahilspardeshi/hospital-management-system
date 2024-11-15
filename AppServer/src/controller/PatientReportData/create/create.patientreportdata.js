
import prisma from "../../../db/index.js";

export const createPatientReport = async (report) => {
  return await prisma.petientReportData.create({
    data: {
      petinet_id: report.patient_id,
      title: report.title,
      discription: report.description, // Fixed the typo from discription to description
      status: 'Pending',
    },
  });
};