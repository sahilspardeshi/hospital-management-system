/*
  Warnings:

  - You are about to drop the column `full_name` on the `Petients` table. All the data in the column will be lost.
  - The primary key for the `Staff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Staff_id` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `Staff` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `Petients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LabReports" DROP CONSTRAINT "labreports_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "MainMedication" DROP CONSTRAINT "MainMedication_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "MainNotes" DROP CONSTRAINT "notes_user_id_foreign";

-- DropForeignKey
ALTER TABLE "MedicalReports" DROP CONSTRAINT "medicalreports_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "OPDTreatments" DROP CONSTRAINT "opdtreatments_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "SurgeryRecords" DROP CONSTRAINT "surgeryrecords_doctor_id_foreign";

-- AlterTable
ALTER TABLE "Petients" DROP COLUMN "full_name",
ADD COLUMN     "fullName" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_pkey",
DROP COLUMN "Staff_id",
DROP COLUMN "full_name",
ADD COLUMN     "fullName" VARCHAR(100) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "role" VARCHAR(255) NOT NULL DEFAULT 'SuperAdmin',
ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "LabReports" ADD CONSTRAINT "labreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "medicalreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OPDTreatments" ADD CONSTRAINT "opdtreatments_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainNotes" ADD CONSTRAINT "notes_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "Staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
