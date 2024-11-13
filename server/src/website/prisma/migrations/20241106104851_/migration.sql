/*
  Warnings:

  - Added the required column `section` to the `Advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Section" AS ENUM ('Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4');

-- AlterTable
ALTER TABLE "Advertisement" ADD COLUMN     "section" "Section" NOT NULL;
