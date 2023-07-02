/*
  Warnings:

  - You are about to drop the `allergies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor_appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor_urgency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `person_allergies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `doctor_appointment` DROP FOREIGN KEY `doctor_appointment_appointment_id_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_appointment` DROP FOREIGN KEY `doctor_appointment_doctor_id_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_urgency` DROP FOREIGN KEY `doctor_urgency_doctor_id_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_urgency` DROP FOREIGN KEY `doctor_urgency_urgencias_id_fkey`;

-- DropForeignKey
ALTER TABLE `person_allergies` DROP FOREIGN KEY `person_allergies_allergies_id_fkey`;

-- DropForeignKey
ALTER TABLE `person_allergies` DROP FOREIGN KEY `person_allergies_person_id_fkey`;

-- AlterTable
ALTER TABLE `urgency` ADD COLUMN `doctorId` INTEGER NULL;

-- DropTable
DROP TABLE `allergies`;

-- DropTable
DROP TABLE `doctor_appointment`;

-- DropTable
DROP TABLE `doctor_urgency`;

-- DropTable
DROP TABLE `person_allergies`;

-- CreateTable
CREATE TABLE `allergie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_allergieToperson` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_allergieToperson_AB_unique`(`A`, `B`),
    INDEX `_allergieToperson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_appointmentTodoctor` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_appointmentTodoctor_AB_unique`(`A`, `B`),
    INDEX `_appointmentTodoctor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `urgency` ADD CONSTRAINT `urgency_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_allergieToperson` ADD CONSTRAINT `_allergieToperson_A_fkey` FOREIGN KEY (`A`) REFERENCES `allergie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_allergieToperson` ADD CONSTRAINT `_allergieToperson_B_fkey` FOREIGN KEY (`B`) REFERENCES `person`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_appointmentTodoctor` ADD CONSTRAINT `_appointmentTodoctor_A_fkey` FOREIGN KEY (`A`) REFERENCES `appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_appointmentTodoctor` ADD CONSTRAINT `_appointmentTodoctor_B_fkey` FOREIGN KEY (`B`) REFERENCES `doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
