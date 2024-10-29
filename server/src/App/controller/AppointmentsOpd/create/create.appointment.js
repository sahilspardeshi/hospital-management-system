import prisma from "../../../db/index.js";
import {  getCurrentDateInIST } from "../../../utils/dateConverter.js";
import { createPatientReport } from "../../PatientReportData/create/create.patientreportdata.js";

export const createAppointment = async (req, res) => {
  const { patient_id, doctor_id, appointment_date,time, appointment_type, status, title, description, report_id } = req.body;

  try {
    // Using transactions to ensure data integrity
    await prisma.$transaction(async (prisma) => {
      // Check if the PatientReportData already exists using the provided report_id
      const existingReport = await prisma.petientReportData.findFirst({
        where: {
          id: Number(report_id) // Find by report ID
        },
      });

      let patientReportData;

      // If the report exists, use it; otherwise, create a new one
      if (existingReport) {
        patientReportData = existingReport;
      } else {
        // Create a new PatientReportData record
        patientReportData = await createPatientReport({
          patient_id,
          title,
          description,
        });

        if (!patientReportData) {
          throw new Error("Error creating Patient report!");
        }
      }

      // Create the Appointment record with the associated PatientReportData
      const newAppointment = await prisma.appointments_OPD.create({
        data: {
          patient_id: patient_id,
          doctor_id,
          appointment_date:(appointment_date+" "+time)|| getCurrentDateInIST(),
          PetientReportData_id: patientReportData.id, // Link to the report data
          appointment_type,
          status,
        },
      });

      if (!newAppointment) {
        throw new Error("Error creating Appointment!");
      }

      // Return success response
      res.json({ msg: "success", data: { newAppointment } });
    });

  } catch (err) {
    // Handle any errors that occur during the transaction
    console.error("Transaction failed: ", err.message);
    res.status(500).json({ msg: "Transaction failed", error: err.message });
  }
};
