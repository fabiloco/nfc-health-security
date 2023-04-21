/*
  Warnings:

  - Made the column `created_at` on table `allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `doctor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `doctor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `doctor_appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `doctor_appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `doctor_urgency` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `doctor_urgency` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `history` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `history` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `person` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `person` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `person_allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `person_allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `person_history` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `person_history` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `urgency` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `urgency` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `appointment` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `contact` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `doctor` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `doctor_appointment` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `doctor_urgency` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `history` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `person` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `person_allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `person_history` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `urgency` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;
