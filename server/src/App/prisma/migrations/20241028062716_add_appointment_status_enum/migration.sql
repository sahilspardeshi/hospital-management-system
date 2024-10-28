/*
  Warnings:

  - The `status` column on the `Appointments_OPD` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "Appointments_OPD" DROP COLUMN "status",
ADD COLUMN     "status" "AppointmentStatus";
