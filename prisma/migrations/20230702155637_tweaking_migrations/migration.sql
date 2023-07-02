/*
  Warnings:

  - You are about to drop the column `personId` on the `condition` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `medication` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `person` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `condition` DROP FOREIGN KEY `condition_personId_fkey`;

-- DropForeignKey
ALTER TABLE `medication` DROP FOREIGN KEY `medication_personId_fkey`;

-- AlterTable
ALTER TABLE `condition` DROP COLUMN `personId`;

-- AlterTable
ALTER TABLE `medication` DROP COLUMN `personId`;

-- CreateTable
CREATE TABLE `_conditionToperson` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_conditionToperson_AB_unique`(`A`, `B`),
    INDEX `_conditionToperson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_medicationToperson` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_medicationToperson_AB_unique`(`A`, `B`),
    INDEX `_medicationToperson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `person_user_id_key` ON `person`(`user_id`);

-- AddForeignKey
ALTER TABLE `_conditionToperson` ADD CONSTRAINT `_conditionToperson_A_fkey` FOREIGN KEY (`A`) REFERENCES `condition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_conditionToperson` ADD CONSTRAINT `_conditionToperson_B_fkey` FOREIGN KEY (`B`) REFERENCES `person`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_medicationToperson` ADD CONSTRAINT `_medicationToperson_A_fkey` FOREIGN KEY (`A`) REFERENCES `medication`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_medicationToperson` ADD CONSTRAINT `_medicationToperson_B_fkey` FOREIGN KEY (`B`) REFERENCES `person`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
