-- DropIndex
DROP INDEX "PatientMedication_ANCtreatment_id_key";

-- DropIndex
DROP INDEX "PatientMedication_IPDtreatment_id_key";

-- DropIndex
DROP INDEX "PatientMedication_ODPtreatment_id_key";

-- RenameForeignKey
ALTER TABLE "PatientMedication" RENAME CONSTRAINT "PatientMedication_IPDtreatment_id_fkey" TO "PatientMedication_IPDtreatment_id_foreign";

-- RenameForeignKey
ALTER TABLE "PatientMedication" RENAME CONSTRAINT "PatientMedication_ODPtreatment_id_fkey" TO "PatientMedication_ODPtreatment_id_foreign";
