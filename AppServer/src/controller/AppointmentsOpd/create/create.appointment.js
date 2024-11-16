import prisma from "../../../db/index.js";
import {  getCurrentDateInIST } from "../../../utils/dateConverter.js";
import { createPatientReport } from "../../PatientReportData/create/create.patientreportdata.js";

export const createAppointment = async (req, res) => {
  const { patientName, doctorName, appointment_date, appointment_type, status, title, description } = req.body;
  console.log(title);

  try {

    const Patient = await prisma.petients.findFirst({
      where:{
        fullName:patientName
      }
    });

    const doctor = await prisma.staff.findFirst({
      where:{
        fullName:doctorName
      }
    });

    // Using transactions to ensure data integrity
    await prisma.$transaction(async (prisma) => {
      // Check if the PatientReportData already exists using the provided report_id
      const existingReport = await prisma.petientReportData.findFirst({
        where: {
          petinet_id: Number(Patient.id) // Find by report ID
        },
      });

      let patientReportData;

      // If the report exists, use it(update it); otherwise, create a new one
      if (existingReport) {
        patientReportData = await prisma.petientReportData.update({
          where:{
             id: Number(existingReport.id)
            } ,
            data:{
              title: title ,
              discription: description ,
              status: status ,
              updated_at: new Date(), // Update the timestamp
            }
          
        });
      } else {
        // Create a new PatientReportData record
        patientReportData = await createPatientReport({
          patient_id:Patient.id,
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
          patient_id: Patient.id,
          doctor_id:doctor.id,
          appointment_date:(appointment_date)|| getCurrentDateInIST(),
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
