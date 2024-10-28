import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to create a new MainMedication record
export const createMainMedication = async (req, res) => {
  const {
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
    end_date
  } = req.body;

  try {
    const existingMedication = await prisma.mainMedication.findFirst({
      where: {
        PatientMedication_id,
        SurgeryRecords_id,
        doctor_id,
        treatment_type,
        start_date : new Date(convertIndianDateToPostgres(start_date)),
        end_date : new Date(convertIndianDateToPostgres(end_date))
      },
    });

    if (existingMedication) {
      return res.status(400).json({ message: 'Main medication already exists for this treatment and doctor.' });
    }

    const newMedication = await prisma.mainMedication.create({
      data: {
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
        start_date : new Date(convertIndianDateToPostgres(start_date)),
        end_date : new Date(convertIndianDateToPostgres(end_date))
      },
    });

    res.status(201).json(newMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to create a new Medication record
export const createMedication = async (req, res) => {
  const {
    treatment_id,
    medicine_id,
    medication_name,
    dosage,
    frequency,
    cost,
    start_date,
    end_date,
    instructions
  } = req.body;

  try {
    const existingMedication = await prisma.medications.findFirst({
      where: {
        treatment_id,
        medicine_id,
        medication_name,
        start_date : new Date(convertIndianDateToPostgres(start_date)),
        end_date : new Date(convertIndianDateToPostgres(end_date)),
      },
    });

    if (existingMedication) {
      return res.status(400).json({ message: 'Medication already exists for this treatment.' });
    }

    const newMedication = await prisma.medications.create({
      data: {
        treatment_id,
        medicine_id,
        medication_name,
        dosage,
        frequency,
        cost,
        start_date : new Date(convertIndianDateToPostgres(start_date)),
        end_date : new Date(convertIndianDateToPostgres(end_date)),
        instructions
      },
    });

    res.status(201).json(newMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
