/*
  Warnings:

  - You are about to drop the column `roles` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `roles`,
    ADD COLUMN `role` ENUM('ADMIN', 'PATIENT', 'DOCTOR') NOT NULL DEFAULT 'PATIENT';
