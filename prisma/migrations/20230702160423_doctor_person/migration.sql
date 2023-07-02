/*
  Warnings:

  - A unique constraint covering the columns `[person_id]` on the table `doctor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `doctor_person_id_key` ON `doctor`(`person_id`);
