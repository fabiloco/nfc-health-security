/*
  Warnings:

  - You are about to drop the `_roleTouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_roleTouser` DROP FOREIGN KEY `_roleTouser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_roleTouser` DROP FOREIGN KEY `_roleTouser_B_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `roles` ENUM('ADMIN', 'PATIENT', 'DOCTOR') NOT NULL DEFAULT 'PATIENT';

-- DropTable
DROP TABLE `_roleTouser`;

-- DropTable
DROP TABLE `role`;
