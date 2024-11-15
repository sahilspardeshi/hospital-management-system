-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'COMPLETED');

-- CreateTable
CREATE TABLE "Appointments_OPD" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "appointment_date" TEXT NOT NULL,
    "PetientReportData_id" INTEGER NOT NULL,
    "appointment_type" VARCHAR(10),
    "status" "AppointmentStatus",
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appointments_OPD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdvancePayment" (
    "id" SERIAL NOT NULL,
    "billId" INTEGER NOT NULL,
    "paymentDate" TEXT NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "payerName" TEXT NOT NULL,
    "paymentMethod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdvancePayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER,
    "ODPtreatment_id" INTEGER,
    "IPDAdmissions_id" INTEGER,
    "IPDtreatment_id" INTEGER,
    "ANCtreatment_id" INTEGER,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "bill_date" TEXT NOT NULL,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "amount_paid" DECIMAL(10,2) NOT NULL,
    "payment_status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyItemsList" (
    "id" SERIAL NOT NULL,
    "ipd_admission_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "record_date" TEXT NOT NULL,
    "day_id" INTEGER NOT NULL,
    "item_category" VARCHAR(100) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_quantity" VARCHAR(50),
    "item_cost" DECIMAL(10,2),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyItemsList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayItem" (
    "id" SERIAL NOT NULL,
    "ipd_admission_id" INTEGER NOT NULL,
    "treatment_id" INTEGER NOT NULL,
    "quantity" VARCHAR(50),
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "DayItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IPDAdmissions" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER,
    "PetientReportData_id" INTEGER,
    "discharge_date" TEXT NOT NULL,
    "diagnosis" TEXT,
    "status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IPDAdmissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IPDTreatments" (
    "id" SERIAL NOT NULL,
    "petient_id" INTEGER NOT NULL,
    "ipd_admission_id" INTEGER,
    "treatment_date" TEXT NOT NULL,
    "treatment_details" TEXT,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IPDTreatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainIntakeOutput" (
    "id" SERIAL NOT NULL,
    "ipd_admission_id" INTEGER,
    "treatment_id" INTEGER NOT NULL,
    "IntakeOutput_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "record_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainIntakeOutput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntakeOutput" (
    "id" SERIAL NOT NULL,
    "record_date" TEXT NOT NULL,
    "MainIntakeOutput_id" INTEGER NOT NULL,
    "intake_time" INTEGER,
    "intake_nature" INTEGER,
    "intake_amount" INTEGER,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "intake_total" DECIMAL(8,2),
    "output_time" INTEGER,
    "output_nature" INTEGER,
    "output_amount" INTEGER,
    "output_total" DECIMAL(8,2),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IntakeOutput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainLabReports" (
    "id" SERIAL NOT NULL,
    "ODPtreatment_id" INTEGER,
    "IPDtreatment_id" INTEGER,
    "ANCtreatment_id" INTEGER,
    "status" VARCHAR(20),
    "labReport_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,

    CONSTRAINT "MainLabReports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabReports" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER,
    "doctor_id" INTEGER,
    "MainLabReports_id" INTEGER NOT NULL,
    "test_name" VARCHAR(255),
    "test_date" TEXT NOT NULL,
    "test_result" TEXT,
    "test_file" TEXT,
    "labTest_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "lab_technician" VARCHAR(255),
    "status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LabReports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabTestDetails" (
    "detail_id" INTEGER NOT NULL,
    "report_id" INTEGER,
    "parameter_name" VARCHAR(255),
    "parameter_value" VARCHAR(100),
    "normal_range" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LabTestDetails_pkey" PRIMARY KEY ("detail_id")
);

-- CreateTable
CREATE TABLE "MainMedicalReports" (
    "id" SERIAL NOT NULL,
    "ODPtreatment_id" INTEGER,
    "IPDtreatment_id" INTEGER,
    "ANCtreatment_id" INTEGER,
    "Medical_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "status" VARCHAR(20),
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,

    CONSTRAINT "MainMedicalReports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalReports" (
    "report_id" SERIAL NOT NULL,
    "patient_id" INTEGER,
    "doctor_id" INTEGER,
    "MainReports_id" INTEGER,
    "report_type" VARCHAR(255),
    "report_description" TEXT,
    "result_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "report_date" TEXT NOT NULL,
    "report_file" TEXT,
    "status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MedicalReports_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "id" SERIAL NOT NULL,
    "treatment_id" INTEGER NOT NULL,
    "medicine_id" INTEGER NOT NULL,
    "medication_name" VARCHAR(100) NOT NULL,
    "dosage" VARCHAR(50),
    "frequency" VARCHAR(50),
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "instructions" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainMedication" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER,
    "PatientMedication_id" INTEGER NOT NULL,
    "SurgeryRecords_id" INTEGER,
    "treatment_type" VARCHAR(10) NOT NULL,
    "doctor_id" INTEGER,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "test_file" TEXT,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "total_quantity" INTEGER NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainMedication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientMedication" (
    "id" SERIAL NOT NULL,
    "ODPtreatment_id" INTEGER,
    "IPDtreatment_id" INTEGER,
    "ANCtreatment_id" INTEGER,
    "doctor_id" INTEGER,
    "Medication_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,

    CONSTRAINT "PatientMedication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OPDTreatments" (
    "id" SERIAL NOT NULL,
    "appointment_id" INTEGER,
    "patient_id" INTEGER,
    "doctor_id" INTEGER,
    "diagnosis" TEXT,
    "treatment_plan" TEXT,
    "report_file" TEXT,
    "follow_up_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OPDTreatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Petients" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(100) NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "blood_group" VARCHAR(5),
    "mobile_number" VARCHAR(10) NOT NULL,
    "address" TEXT,
    "email" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Petients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PetientReportData" (
    "id" SERIAL NOT NULL,
    "petinet_id" INTEGER NOT NULL,
    "title" VARCHAR(255),
    "discription" VARCHAR(255),
    "status" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PetientReportData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportResults" (
    "result_id" SERIAL NOT NULL,
    "report_id" INTEGER,
    "observation_name" VARCHAR(255),
    "observation_value" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReportResults_pkey" PRIMARY KEY ("result_id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "domain" VARCHAR(500),
    "icon" VARCHAR(500),
    "hospital" VARCHAR(500),
    "current_plan" TEXT NOT NULL,
    "feature" VARCHAR(500),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(100) NOT NULL,
    "specialization" VARCHAR(100),
    "user" VARCHAR(200),
    "password" VARCHAR(200),
    "type" VARCHAR(255) NOT NULL DEFAULT 'doctor',
    "role" VARCHAR(255) NOT NULL DEFAULT 'SuperAdmin',
    "contact_number" VARCHAR(15) NOT NULL,
    "email" VARCHAR(100),
    "qualifications" TEXT,
    "department" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SurgeryRecords" (
    "surgery_id" SERIAL NOT NULL,
    "patient_id" INTEGER,
    "treatment_id" INTEGER NOT NULL,
    "ipd_admission_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "surgery_type" VARCHAR(255) NOT NULL,
    "surgery_date" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "operating_room" VARCHAR(50),
    "team_members" INTEGER NOT NULL,
    "anesthesia_type" VARCHAR(100),
    "preop_diagnosis" TEXT,
    "postop_diagnosis" TEXT,
    "procedure_description" TEXT,
    "surgery_outcome" VARCHAR(100),
    "complications" TEXT,
    "medications_administered" TEXT,
    "blood_loss" VARCHAR(50),
    "implants_used" TEXT,
    "recovery_notes" TEXT,
    "DoctorCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "MedicationCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "teamCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "TotalCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SurgeryRecords_pkey" PRIMARY KEY ("surgery_id")
);

-- CreateTable
CREATE TABLE "TechnicianReports" (
    "technician_report_id" SERIAL NOT NULL,
    "report_id" INTEGER,
    "technician_id" INTEGER,
    "technician_notes" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TechnicianReports_pkey" PRIMARY KEY ("technician_report_id")
);

-- CreateTable
CREATE TABLE "MainVitalSigns" (
    "id" SERIAL NOT NULL,
    "ipd_admission_id" INTEGER,
    "treatment_id" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "List_count" INTEGER NOT NULL,
    "record_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainVitalSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitalSigns" (
    "id" SERIAL NOT NULL,
    "MainVitalSigns_id" INTEGER NOT NULL,
    "record_date" TEXT NOT NULL,
    "spo2" INTEGER,
    "temperature" INTEGER,
    "blood_pressure" INTEGER,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "pulse_rate" INTEGER,
    "respiratory_rate" INTEGER,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VitalSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ward" (
    "id" SERIAL NOT NULL,
    "dayitem_id" INTEGER NOT NULL,
    "treatment_id" INTEGER NOT NULL,
    "ipd_admission_id" INTEGER NOT NULL,
    "transfer_date" TEXT NOT NULL,
    "transfer_time" TEXT NOT NULL,
    "room" VARCHAR(100) NOT NULL,
    "bed" VARCHAR(100) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "transfer_reason" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication_list" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "medication_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainNotes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" VARCHAR(255) NOT NULL DEFAULT 'doctor',
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "treatment_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "MainNotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "MainNotes_id" INTEGER NOT NULL,
    "type" VARCHAR(255) NOT NULL DEFAULT 'doctor',
    "notes" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "create_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Billing_ODPtreatment_id_key" ON "Billing"("ODPtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Billing_IPDAdmissions_id_key" ON "Billing"("IPDAdmissions_id");

-- CreateIndex
CREATE UNIQUE INDEX "Billing_ANCtreatment_id_key" ON "Billing"("ANCtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Petients_mobile_number_key" ON "Petients"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "Petients_email_key" ON "Petients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_contact_number_key" ON "Staff"("contact_number");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ward_treatment_id_key" ON "Ward"("treatment_id");

-- AddForeignKey
ALTER TABLE "Appointments_OPD" ADD CONSTRAINT "appointments_PetientReportData_id_foreign" FOREIGN KEY ("PetientReportData_id") REFERENCES "PetientReportData"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Appointments_OPD" ADD CONSTRAINT "appointments_opd_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Appointments_OPD" ADD CONSTRAINT "appointments_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AdvancePayment" ADD CONSTRAINT "AdvancePayment_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Billing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_IPDAdmissions_id_fkey" FOREIGN KEY ("IPDAdmissions_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "billing_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_ODPtreatment_id_fkey" FOREIGN KEY ("ODPtreatment_id") REFERENCES "OPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_IPDtreatment_id_fkey" FOREIGN KEY ("IPDtreatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "DailyItemsList" ADD CONSTRAINT "dailyitemslist_day_id_foreign" FOREIGN KEY ("day_id") REFERENCES "DayItem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "DailyItemsList" ADD CONSTRAINT "dailyitemslist_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "DailyItemsList" ADD CONSTRAINT "dailyitemslist_item_id_foreign" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "DayItem" ADD CONSTRAINT "dayitem_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "DayItem" ADD CONSTRAINT "dayitem_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "IPDAdmissions" ADD CONSTRAINT "appointments_PetientReportData_id_foreign" FOREIGN KEY ("PetientReportData_id") REFERENCES "PetientReportData"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "IPDAdmissions" ADD CONSTRAINT "ipdadmissions_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "IPDTreatments" ADD CONSTRAINT "ipdtreatments_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "IPDTreatments" ADD CONSTRAINT "ipdtreatments_petient_id_foreign" FOREIGN KEY ("petient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainIntakeOutput" ADD CONSTRAINT "MainIntakeOutput_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainIntakeOutput" ADD CONSTRAINT "MainIntakeOutput_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "IntakeOutput" ADD CONSTRAINT "IntakeOutput_MainIntakeOutput_id_foreign" FOREIGN KEY ("MainIntakeOutput_id") REFERENCES "MainIntakeOutput"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainLabReports" ADD CONSTRAINT "MainLabReports_ODPtreatment_id_fkey" FOREIGN KEY ("ODPtreatment_id") REFERENCES "OPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainLabReports" ADD CONSTRAINT "MainLabReports_IPDtreatment_id_fkey" FOREIGN KEY ("IPDtreatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LabReports" ADD CONSTRAINT "labreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LabReports" ADD CONSTRAINT "labreports_MainLabReports_id_foreign" FOREIGN KEY ("MainLabReports_id") REFERENCES "MainLabReports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LabReports" ADD CONSTRAINT "labreports_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LabTestDetails" ADD CONSTRAINT "labtestdetails_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "LabReports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedicalReports" ADD CONSTRAINT "MainMedicalReports_ODPtreatment_id_fkey" FOREIGN KEY ("ODPtreatment_id") REFERENCES "OPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedicalReports" ADD CONSTRAINT "MainMedicalReports_IPDtreatment_id_fkey" FOREIGN KEY ("IPDtreatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "labreports_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "medicalreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "medicalreports_MainMedicalReports_id_foreign" FOREIGN KEY ("MainReports_id") REFERENCES "MainMedicalReports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "medications_medicine_id_foreign" FOREIGN KEY ("medicine_id") REFERENCES "medication_list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "medications_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "MainMedication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "labreports_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_SurgeryRecords_id_foreign" FOREIGN KEY ("SurgeryRecords_id") REFERENCES "SurgeryRecords"("surgery_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_PatientMedication_id_foreign" FOREIGN KEY ("PatientMedication_id") REFERENCES "PatientMedication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PatientMedication" ADD CONSTRAINT "PatientMedication_ODPtreatment_id_foreign" FOREIGN KEY ("ODPtreatment_id") REFERENCES "OPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PatientMedication" ADD CONSTRAINT "PatientMedication_IPDtreatment_id_foreign" FOREIGN KEY ("IPDtreatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OPDTreatments" ADD CONSTRAINT "opdtreatments_appointment_id_foreign" FOREIGN KEY ("appointment_id") REFERENCES "Appointments_OPD"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OPDTreatments" ADD CONSTRAINT "opdtreatments_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PetientReportData" ADD CONSTRAINT "PetientReportData_petinet_id_foreign" FOREIGN KEY ("petinet_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ReportResults" ADD CONSTRAINT "reportresults_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "MedicalReports"("report_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TechnicianReports" ADD CONSTRAINT "technicianreports_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "LabReports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainVitalSigns" ADD CONSTRAINT "MainVitalSigns_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainVitalSigns" ADD CONSTRAINT "MainVitalSigns_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "VitalSigns" ADD CONSTRAINT "VitalSigns_MainVitalSigns_id_foreign" FOREIGN KEY ("MainVitalSigns_id") REFERENCES "MainVitalSigns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Ward" ADD CONSTRAINT "ward_ipd_admission_id_foreign" FOREIGN KEY ("ipd_admission_id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Ward" ADD CONSTRAINT "Ward_treatment_id_fkey" FOREIGN KEY ("treatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainNotes" ADD CONSTRAINT "notes_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainNotes" ADD CONSTRAINT "notes_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_MainNotes_id_foreign" FOREIGN KEY ("MainNotes_id") REFERENCES "MainNotes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
