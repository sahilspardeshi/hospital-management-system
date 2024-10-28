import prisma from "../../../db/index.js";
import { convertIndianDateToPostgres } from "../../../utils/dateConverter.js";
import { createPatientReport } from "../../PatientReportData/create/create.patientreportdata.js";


export const createAppointment = async (req, res) => {
  const { patient_id, doctor_id, appointment_date, appointment_type, status, diagnosis, treatment_plan, report_file, follow_up_date } = req.body;

  try {
   

    //using transations in case creation of createPatientReport fails appointment must not be created 
    await prisma.$transaction(async (prisma) => {
      // Create a new PatientReportData record
      const patientReportData = await createPatientReport(patient_id, prisma);

      if (!patientReportData) {
        throw new Error("Error creating Patient report!");
      }

      // Create the Appointment record
      const newAppointment = await prisma.appointments_OPD.create({
        data: {
          patient_id: patient_id,
          doctor_id,
          appointment_date: new Date(convertIndianDateToPostgres(appointment_date)),
          PetientReportData_id: patientReportData.id, // Link the created PatientReportData
          appointment_type,
          status,
        },
      });

      if (!newAppointment) {
        throw new Error("Error creating Appointment!");
      }

      // If everything is successful, return the results
      res.json({ msg: "success", data: { newAppointment } });
    });

  } catch (err) {
    // If any error occurs during the transaction, it will be caught here
    console.error("Transaction failed: ", err.message);
    res.status(500).json({ msg: "Transaction failed", error: err.message });
  }
};


