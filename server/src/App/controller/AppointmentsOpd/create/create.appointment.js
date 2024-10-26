import prisma from "../../../db/index.js";


export const createAppointment = async (req, res) => {
  const { patient_id, doctor_id, appointment_date, appointment_time, appointment_type, status, diagnosis, treatment_plan, report_file, follow_up_date } = req.body;

  try {

    // Always create a new PetientReportData record for every new appointment
    const petientReportData = await prisma.petientReportData.create({
      data: {
        petinet_id: BigInt(patient_id),
        title: 'New Report', // Set the default title or modify this
        discription: 'Report created for this appointment', // Set the default description
        status: 'Pending',  // You can modify the initial status
      }
    });

    const newAppointment = await prisma.appointments_OPD.create({
      data: {
        patient_id: BigInt(patient_id),
        doctor_id,
        appointment_date: new Date(appointment_date),
        appointment_time: new Date(appointment_time),
        PetientReportData_id: petientReportData.id,  // Use the newly created PetientReportData
        appointment_type,
        status
      }
    });

    if(newAppointment){
      res.json({msg:"success",data:newAppointment});
    };


    //ivoke function to create opdteatment record




  } catch (err) {
      throw err
  }





}

