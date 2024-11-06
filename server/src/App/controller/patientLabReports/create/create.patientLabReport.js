import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPatientLabReportWithMain = async (req, res) => {
  const {
    patient_id,
    doctor_id,
    MainLabReports_id,
    test_name,
    test_date,
    test_result,
    test_file,
    labTest_count,
    cost,
    paid,
    lab_technician,
    status,
    // Fields specific to MainLabReport creation if it doesn't exist
    ODPtreatment_id,
    IPDtreatment_id,
    ANCtreatment_id,
    main_status,
    main_labReport_count,
    main_cost,
    main_paid,
    type,
    description,
    start_date,
    end_date,
  } = req.body;

  try {
    let mainLabReport;

    // Check if the MainLabReport exists
    if (MainLabReports_id) {
      mainLabReport = await prisma.mainLabReports.findUnique({
        where: { id: MainLabReports_id },
      });
    }

    // Create MainLabReport if it doesn't exist
    if (!mainLabReport) {
      mainLabReport = await prisma.mainLabReports.create({
        data: {
          ODPtreatment_id,
          IPDtreatment_id,
          ANCtreatment_id,
          status: main_status,
          labReport_count: main_labReport_count,
          cost: main_cost,
          paid: main_paid,
          type,
          description,
          start_date,
          end_date,
        },
      });
    }

    // Create PatientLabReport
    const newPatientLabReport = await prisma.labReports.create({
      data: {
        patient_id,
        doctor_id,
        MainLabReports_id: mainLabReport.id,
        test_name,
        test_date,
        test_result,
        test_file,
        labTest_count,
        cost,
        paid,
        lab_technician,
        status,
      },
    });

    res.status(201).json({
      msg: "Successfully created Lab Report with MainLab Report",
      newPatientLabReport,
    });
  } catch (error) {
    console.error("Error creating Lab Report:", error.message);
    res.status(500).json({ message: "Error creating lab Report", error: error.message });
  }
};
