export const createPatientReport = async (patient_id, prisma) => {
    return await prisma.petientReportData.create({
      data: {
        petinet_id: patient_id,
        title: 'New Report',
        discription: 'Report created for this appointment',
        status: 'Pending',
      },
    });
  };