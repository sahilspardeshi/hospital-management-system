import prisma from "../../../db/index.js";

export const createMainMedication = async (req, res) => {
  const {
    patient_id,
    PatientMedication_id,
    SurgeryRecords_id,
    treatment_type,
    doctor_id,
    type,
    description,
    test_file,
    cost,
    paid,
    total_quantity,
    start_date,
    end_date,
    ODPtreatment_id,
    IPDtreatment_id,
    ANCtreatment_id,
  } = req.body;

  try {
    // Check if at least one treatment ID is provided
    if (!ODPtreatment_id && !IPDtreatment_id && !ANCtreatment_id) {
      return res.status(400).json({ message: 'At least one treatment ID (OPD, IPD, ANC) must be provided.' });
    }

    // Check if PatientMedication already exists
    let patientMedication;

    if (PatientMedication_id) {
      patientMedication = await prisma.patientMedication.findUnique({
        where: { id: PatientMedication_id },
      });
    }

    // If PatientMedication does not exist, create it
    if (!patientMedication) {
      patientMedication = await prisma.patientMedication.create({
        data: {
          doctor_id,
          Medication_count: 1, // Adjust as needed
          cost,
          paid,
          type,
          description,
          start_date,
          end_date,
          ODPtreatment_id,
          IPDtreatment_id,
          ANCtreatment_id,
        },
      });
    }

    // Create MainMedication
    const newMainMedication = await prisma.mainMedication.create({
      data: {
        patient_id,
        PatientMedication_id: patientMedication.id, // Use the created or found PatientMedication ID
        SurgeryRecords_id,
        treatment_type,
        doctor_id,
        type,
        description,
        test_file,
        cost,
        paid,
        total_quantity,
        start_date,
        end_date,
      },
    }); 

    return res.status(201).json(newMainMedication);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating MainMedication.', error });
  }
};
