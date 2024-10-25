-- CreateTable
CREATE TABLE "Appointments_OPD" (
    "id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT,
    "doctor_id" INTEGER,
    "appointment_date" DATE NOT NULL,
    "appointment_time" TIME(0) NOT NULL,
    "PetientReportData_id" BIGINT NOT NULL,
    "appointment_type" VARCHAR(10),
    "status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appointments_OPD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdvancePayment" (
    "id" BIGSERIAL NOT NULL,
    "billId" BIGINT NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "payerName" TEXT NOT NULL,
    "paymentMethod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdvancePayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT,
    "ODPtreatment_id" BIGINT,
    "IPDAdmissions_id" BIGINT,
    "IPDtreatment_id" BIGINT,
    "ANCtreatment_id" BIGINT,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "bill_date" DATE NOT NULL,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "amount_paid" DECIMAL(10,2) NOT NULL,
    "payment_status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyItemsList" (
    "id" BIGSERIAL NOT NULL,
    "ipd_admission_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,
    "record_date" DATE NOT NULL,
    "day_id" BIGINT NOT NULL,
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
    "id" BIGSERIAL NOT NULL,
    "ipd_admission_id" BIGINT NOT NULL,
    "treatment_id" BIGINT NOT NULL,
    "quantity" VARCHAR(50),
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "DayItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IPDAdmissions" (
    "id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT,
    "PetientReportData_id" BIGINT,
    "discharge_date" DATE,
    "diagnosis" TEXT,
    "status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IPDAdmissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IPDTreatments" (
    "id" BIGSERIAL NOT NULL,
    "petient_id" BIGINT NOT NULL,
    "ipd_admission_id" BIGINT,
    "treatment_date" DATE NOT NULL,
    "treatment_details" TEXT,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IPDTreatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainIntakeOutput" (
    "id" BIGSERIAL NOT NULL,
    "ipd_admission_id" BIGINT,
    "treatment_id" BIGINT NOT NULL,
    "IntakeOutput_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "record_date" DATE NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainIntakeOutput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntakeOutput" (
    "id" BIGSERIAL NOT NULL,
    "record_date" DATE NOT NULL,
    "MainIntakeOutput_id" BIGINT NOT NULL,
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
    "id" BIGSERIAL NOT NULL,
    "ODPtreatment_id" BIGINT,
    "IPDtreatment_id" BIGINT,
    "ANCtreatment_id" BIGINT,
    "status" VARCHAR(20),
    "labReport_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "start_date" DATE,
    "end_date" DATE,

    CONSTRAINT "MainLabReports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabReports" (
    "id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT,
    "doctor_id" BIGINT,
    "MainLabReports_id" BIGINT NOT NULL,
    "test_name" VARCHAR(255),
    "test_date" DATE,
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
    "detail_id" BIGINT NOT NULL,
    "report_id" BIGINT,
    "parameter_name" VARCHAR(255),
    "parameter_value" VARCHAR(100),
    "normal_range" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LabTestDetails_pkey" PRIMARY KEY ("detail_id")
);

-- CreateTable
CREATE TABLE "MainMedicalReports" (
    "id" BIGSERIAL NOT NULL,
    "ODPtreatment_id" BIGINT,
    "IPDtreatment_id" BIGINT,
    "ANCtreatment_id" BIGINT,
    "Medical_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "status" VARCHAR(20),
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "start_date" DATE,
    "end_date" DATE,

    CONSTRAINT "MainMedicalReports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalReports" (
    "report_id" BIGSERIAL NOT NULL,
    "doctor_id" BIGINT,
    "MainReports_id" BIGINT,
    "report_type" VARCHAR(255),
    "report_description" TEXT,
    "result_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "report_date" DATE,
    "report_file" TEXT,
    "status" VARCHAR(20),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MedicalReports_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "id" BIGSERIAL NOT NULL,
    "treatment_id" BIGINT NOT NULL,
    "medicine_id" BIGINT NOT NULL,
    "medication_name" VARCHAR(100) NOT NULL,
    "dosage" VARCHAR(50),
    "frequency" VARCHAR(50),
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "instructions" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainMedication" (
    "id" BIGSERIAL NOT NULL,
    "PatientMedication_id" BIGINT NOT NULL,
    "SurgeryRecords_id" BIGINT,
    "treatment_type" VARCHAR(10) NOT NULL,
    "doctor_id" BIGINT,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "test_file" TEXT,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "total_quantity" BIGINT NOT NULL,
    "start_date" DATE,
    "end_date" DATE,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainMedication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientMedication" (
    "id" BIGSERIAL NOT NULL,
    "ODPtreatment_id" BIGINT,
    "IPDtreatment_id" BIGINT,
    "ANCtreatment_id" BIGINT,
    "doctor_id" BIGINT,
    "Medication_count" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "type" VARCHAR(255) NOT NULL DEFAULT 'OPD',
    "description" VARCHAR(255),
    "start_date" DATE,
    "end_date" DATE,

    CONSTRAINT "PatientMedication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OPDTreatments" (
    "id" BIGSERIAL NOT NULL,
    "appointment_id" BIGINT,
    "patient_id" BIGINT,
    "doctor_id" BIGINT,
    "diagnosis" TEXT,
    "treatment_plan" TEXT,
    "report_file" TEXT,
    "follow_up_date" DATE,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OPDTreatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Petients" (
    "id" BIGSERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "blood_group" VARCHAR(5),
    "mobile_number" VARCHAR(15) NOT NULL,
    "address" TEXT,
    "email" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Petients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PetientReportData" (
    "id" BIGSERIAL NOT NULL,
    "petinet_id" BIGINT,
    "title" VARCHAR(255),
    "discription" VARCHAR(255),
    "status" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PetientReportData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportResults" (
    "result_id" BIGSERIAL NOT NULL,
    "report_id" BIGINT,
    "observation_name" VARCHAR(255),
    "observation_value" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReportResults_pkey" PRIMARY KEY ("result_id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" BIGSERIAL NOT NULL,
    "domain" VARCHAR(500),
    "icon" VARCHAR(500),
    "hospital" VARCHAR(500),
    "current_plan" DATE,
    "feature" VARCHAR(500),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "Staff_id" BIGSERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "specialization" VARCHAR(100),
    "user" VARCHAR(200),
    "password" VARCHAR(200),
    "type" VARCHAR(255) NOT NULL DEFAULT 'doctor',
    "contact_number" VARCHAR(15) NOT NULL,
    "email" VARCHAR(100),
    "qualifications" TEXT,
    "department" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("Staff_id")
);

-- CreateTable
CREATE TABLE "SurgeryRecords" (
    "surgery_id" BIGSERIAL NOT NULL,
    "patient_id" BIGINT,
    "treatment_id" BIGINT NOT NULL,
    "ipd_admission_id" BIGINT NOT NULL,
    "doctor_id" BIGINT NOT NULL,
    "surgery_type" VARCHAR(255) NOT NULL,
    "surgery_date" DATE NOT NULL,
    "start_time" TIME(0) NOT NULL,
    "end_time" TIME(0) NOT NULL,
    "operating_room" VARCHAR(50),
    "team_members" BIGINT NOT NULL,
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
    "technician_report_id" BIGSERIAL NOT NULL,
    "report_id" BIGINT,
    "technician_id" BIGINT,
    "technician_notes" TEXT,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TechnicianReports_pkey" PRIMARY KEY ("technician_report_id")
);

-- CreateTable
CREATE TABLE "MainVitalSigns" (
    "id" BIGSERIAL NOT NULL,
    "ipd_admission_id" BIGINT,
    "treatment_id" BIGINT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "List_count" INTEGER NOT NULL,
    "record_date" DATE NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainVitalSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitalSigns" (
    "id" BIGSERIAL NOT NULL,
    "MainVitalSigns_id" BIGINT NOT NULL,
    "record_date" DATE NOT NULL,
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
    "id" BIGSERIAL NOT NULL,
    "dayitem_id" BIGINT NOT NULL,
    "treatment_id" BIGINT NOT NULL,
    "ipd_admission_id" BIGINT NOT NULL,
    "transfer_date" DATE NOT NULL,
    "transfer_time" TIME(0) NOT NULL,
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
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "cost" BIGINT NOT NULL,
    "created_at" BIGINT NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication_list" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "medication_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainNotes" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "type" VARCHAR(255) NOT NULL DEFAULT 'doctor',
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "treatment_id" BIGINT NOT NULL,
    "create_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "MainNotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" BIGSERIAL NOT NULL,
    "MainNotes_id" BIGINT NOT NULL,
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
CREATE UNIQUE INDEX "MainLabReports_ODPtreatment_id_key" ON "MainLabReports"("ODPtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "MainLabReports_IPDtreatment_id_key" ON "MainLabReports"("IPDtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "MainLabReports_ANCtreatment_id_key" ON "MainLabReports"("ANCtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "MainMedicalReports_ODPtreatment_id_key" ON "MainMedicalReports"("ODPtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "MainMedicalReports_IPDtreatment_id_key" ON "MainMedicalReports"("IPDtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "MainMedicalReports_ANCtreatment_id_key" ON "MainMedicalReports"("ANCtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "PatientMedication_ODPtreatment_id_key" ON "PatientMedication"("ODPtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "PatientMedication_IPDtreatment_id_key" ON "PatientMedication"("IPDtreatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "PatientMedication_ANCtreatment_id_key" ON "PatientMedication"("ANCtreatment_id");

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
ALTER TABLE "LabReports" ADD CONSTRAINT "labreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
ALTER TABLE "MedicalReports" ADD CONSTRAINT "medicalreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "medicalreports_MainMedicalReports_id_foreign" FOREIGN KEY ("MainReports_id") REFERENCES "MainMedicalReports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "medications_medicine_id_foreign" FOREIGN KEY ("medicine_id") REFERENCES "medication_list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "medications_treatment_id_foreign" FOREIGN KEY ("treatment_id") REFERENCES "MainMedication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_SurgeryRecords_id_foreign" FOREIGN KEY ("SurgeryRecords_id") REFERENCES "SurgeryRecords"("surgery_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_PatientMedication_id_foreign" FOREIGN KEY ("PatientMedication_id") REFERENCES "PatientMedication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PatientMedication" ADD CONSTRAINT "PatientMedication_ODPtreatment_id_fkey" FOREIGN KEY ("ODPtreatment_id") REFERENCES "OPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PatientMedication" ADD CONSTRAINT "PatientMedication_IPDtreatment_id_fkey" FOREIGN KEY ("IPDtreatment_id") REFERENCES "IPDTreatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OPDTreatments" ADD CONSTRAINT "opdtreatments_appointment_id_foreign" FOREIGN KEY ("appointment_id") REFERENCES "Appointments_OPD"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OPDTreatments" ADD CONSTRAINT "opdtreatments_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Petients" ADD CONSTRAINT "patients_id_foreign" FOREIGN KEY ("id") REFERENCES "IPDAdmissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PetientReportData" ADD CONSTRAINT "PetientReportData_petinet_id_foreign" FOREIGN KEY ("petinet_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ReportResults" ADD CONSTRAINT "reportresults_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "MedicalReports"("report_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
ALTER TABLE "MainNotes" ADD CONSTRAINT "notes_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_MainNotes_id_foreign" FOREIGN KEY ("MainNotes_id") REFERENCES "MainNotes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
