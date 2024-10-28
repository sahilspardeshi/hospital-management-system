/*
  Warnings:

  - You are about to drop the column `create_at` on the `MainNotes` table. All the data in the column will be lost.
  - Made the column `discharge_date` on table `IPDAdmissions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `test_date` on table `LabReports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_date` on table `MainLabReports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `MainLabReports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_date` on table `MainMedicalReports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `MainMedicalReports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_date` on table `MainMedication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `MainMedication` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `created_at` to the `MainNotes` table without a default value. This is not possible if the table is not empty.
  - Made the column `report_date` on table `MedicalReports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `Medications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `follow_up_date` on table `OPDTreatments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_date` on table `PatientMedication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `PatientMedication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `current_plan` on table `Setting` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AdvancePayment" ALTER COLUMN "paymentDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Appointments_OPD" ALTER COLUMN "appointment_date" DROP DEFAULT,
ALTER COLUMN "appointment_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Billing" ALTER COLUMN "bill_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "DailyItemsList" ALTER COLUMN "record_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "DayItem" ALTER COLUMN "created_at" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "IPDAdmissions" ALTER COLUMN "discharge_date" SET NOT NULL,
ALTER COLUMN "discharge_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "IPDTreatments" ALTER COLUMN "treatment_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "IntakeOutput" ALTER COLUMN "record_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "LabReports" ALTER COLUMN "test_date" SET NOT NULL,
ALTER COLUMN "test_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MainIntakeOutput" ALTER COLUMN "record_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MainLabReports" ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "start_date" SET DATA TYPE TEXT,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MainMedicalReports" ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "start_date" SET DATA TYPE TEXT,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MainMedication" ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "start_date" SET DATA TYPE TEXT,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MainNotes" DROP COLUMN "create_at",
ADD COLUMN     "created_at" TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE "MainVitalSigns" ALTER COLUMN "record_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MedicalReports" ALTER COLUMN "report_date" SET NOT NULL,
ALTER COLUMN "report_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Medications" ALTER COLUMN "start_date" SET DATA TYPE TEXT,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "OPDTreatments" ALTER COLUMN "follow_up_date" SET NOT NULL,
ALTER COLUMN "follow_up_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PatientMedication" ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "start_date" SET DATA TYPE TEXT,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Petients" ALTER COLUMN "date_of_birth" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Setting" ALTER COLUMN "current_plan" SET NOT NULL,
ALTER COLUMN "current_plan" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SurgeryRecords" ALTER COLUMN "surgery_date" SET DATA TYPE TEXT,
ALTER COLUMN "start_time" SET DATA TYPE TEXT,
ALTER COLUMN "end_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "VitalSigns" ALTER COLUMN "record_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ward" ALTER COLUMN "transfer_date" SET DATA TYPE TEXT,
ALTER COLUMN "transfer_time" SET DATA TYPE TEXT;
