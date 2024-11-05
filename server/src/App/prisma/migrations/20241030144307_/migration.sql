-- AlterTable
ALTER TABLE "MainMedication" ADD COLUMN     "patient_id" INTEGER;

-- AlterTable
ALTER TABLE "MedicalReports" ADD COLUMN     "patient_id" INTEGER;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "labreports_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "labreports_patient_id_foreign" FOREIGN KEY ("patient_id") REFERENCES "Petients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
