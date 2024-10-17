/*
  Warnings:

  - Added the required column `MainIntakeOutput_id` to the `IntakeOutput` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IntakeOutput" ADD COLUMN     "MainIntakeOutput_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "IntakeOutput" ADD CONSTRAINT "IntakeOutput_MainIntakeOutput_id_foreign" FOREIGN KEY ("MainIntakeOutput_id") REFERENCES "MainIntakeOutput"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
