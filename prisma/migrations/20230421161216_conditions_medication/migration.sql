/*
  Warnings:

  - You are about to drop the column `descripcion` on the `allergies` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `allergies` table. All the data in the column will be lost.
  - You are about to drop the `history` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `person_history` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `allergies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `allergies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `person_history` DROP FOREIGN KEY `person_history_history_id_fkey`;

-- DropForeignKey
ALTER TABLE `person_history` DROP FOREIGN KEY `person_history_person_id_fkey`;

-- AlterTable
ALTER TABLE `allergies` DROP COLUMN `descripcion`,
    DROP COLUMN `nombre`,
    ADD COLUMN `description` LONGTEXT NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `history`;

-- DropTable
DROP TABLE `person_history`;

-- CreateTable
CREATE TABLE `condition` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `diagnosis_date` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `personId` BIGINT UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medication` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `reason` LONGTEXT NOT NULL,
    `dosage` VARCHAR(191) NOT NULL,
    `frecuency` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `personId` BIGINT UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `condition` ADD CONSTRAINT `condition_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medication` ADD CONSTRAINT `medication_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
