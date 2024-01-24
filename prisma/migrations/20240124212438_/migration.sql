/*
  Warnings:

  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(0))`.
  - You are about to drop the `_allergieToperson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_appointmentTodoctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_conditionToperson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_medicationToperson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `allergie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `condition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `urgency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_allergieToperson` DROP FOREIGN KEY `_allergieToperson_A_fkey`;

-- DropForeignKey
ALTER TABLE `_allergieToperson` DROP FOREIGN KEY `_allergieToperson_B_fkey`;

-- DropForeignKey
ALTER TABLE `_appointmentTodoctor` DROP FOREIGN KEY `_appointmentTodoctor_A_fkey`;

-- DropForeignKey
ALTER TABLE `_appointmentTodoctor` DROP FOREIGN KEY `_appointmentTodoctor_B_fkey`;

-- DropForeignKey
ALTER TABLE `_conditionToperson` DROP FOREIGN KEY `_conditionToperson_A_fkey`;

-- DropForeignKey
ALTER TABLE `_conditionToperson` DROP FOREIGN KEY `_conditionToperson_B_fkey`;

-- DropForeignKey
ALTER TABLE `_medicationToperson` DROP FOREIGN KEY `_medicationToperson_A_fkey`;

-- DropForeignKey
ALTER TABLE `_medicationToperson` DROP FOREIGN KEY `_medicationToperson_B_fkey`;

-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `appointment_person_id_fkey`;

-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `contact_person_id_fkey`;

-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `doctor_person_id_fkey`;

-- DropForeignKey
ALTER TABLE `urgency` DROP FOREIGN KEY `urgency_doctorId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('ADMIN', 'STUDENT', 'TEACHER') NOT NULL DEFAULT 'STUDENT';

-- DropTable
DROP TABLE `_allergieToperson`;

-- DropTable
DROP TABLE `_appointmentTodoctor`;

-- DropTable
DROP TABLE `_conditionToperson`;

-- DropTable
DROP TABLE `_medicationToperson`;

-- DropTable
DROP TABLE `allergie`;

-- DropTable
DROP TABLE `appointment`;

-- DropTable
DROP TABLE `condition`;

-- DropTable
DROP TABLE `contact`;

-- DropTable
DROP TABLE `doctor`;

-- DropTable
DROP TABLE `medication`;

-- DropTable
DROP TABLE `urgency`;

-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseName` VARCHAR(191) NOT NULL,
    `instructor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,
    `personId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grade` INTEGER NOT NULL,
    `assignmentName` VARCHAR(191) NOT NULL,
    `personId` INTEGER NOT NULL,
    `classId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grade` ADD CONSTRAINT `grade_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grade` ADD CONSTRAINT `grade_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
