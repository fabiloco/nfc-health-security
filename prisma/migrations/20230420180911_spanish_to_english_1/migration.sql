-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `dni` BIGINT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `ocupation` VARCHAR(191) NULL,
    `sex` ENUM('M', 'F') NULL,
    `marital_status` ENUM('S', 'C', 'D', 'V') NULL,
    `address` VARCHAR(191) NULL,
    `blood_type` VARCHAR(191) NULL,
    `height` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NULL,
    `education` VARCHAR(191) NULL,
    `sisben` VARCHAR(191) NULL,
    `estrato` VARCHAR(191) NULL,
    `birthday` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `person_dni_key`(`dni`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allergies` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` LONGTEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person_allergies` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `allergies_id` BIGINT UNSIGNED NOT NULL,
    `person_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appointment` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `start_day` TIMESTAMP(0) NULL,
    `reason` TEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `hospital` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `severity` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `person_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor_appointment` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `appointment_id` BIGINT UNSIGNED NOT NULL,
    `doctor_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `contact_id` BIGINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `person_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor_urgency` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `urgencias_id` BIGINT UNSIGNED NOT NULL,
    `doctor_id` BIGINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `professional_license` VARCHAR(191) NOT NULL,
    `recidency_hospital` VARCHAR(191) NOT NULL,
    `specialty` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `person_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person_history` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` LONGTEXT NOT NULL,
    `start` TIMESTAMP(0) NULL,
    `end` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `history_id` BIGINT UNSIGNED NOT NULL,
    `person_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `urgency` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `start_day` TIMESTAMP(0) NULL,
    `end_day` TIMESTAMP(0) NULL,
    `reason` TEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `hospital` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `severity` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `person_id` BIGINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `person` ADD CONSTRAINT `person_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `person_allergies` ADD CONSTRAINT `person_allergies_allergies_id_fkey` FOREIGN KEY (`allergies_id`) REFERENCES `allergies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `person_allergies` ADD CONSTRAINT `person_allergies_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doctor_appointment` ADD CONSTRAINT `doctor_appointment_appointment_id_fkey` FOREIGN KEY (`appointment_id`) REFERENCES `appointment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doctor_appointment` ADD CONSTRAINT `doctor_appointment_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctor`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doctor_urgency` ADD CONSTRAINT `doctor_urgency_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctor`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doctor_urgency` ADD CONSTRAINT `doctor_urgency_urgencias_id_fkey` FOREIGN KEY (`urgencias_id`) REFERENCES `urgency`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `doctor_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `person_history` ADD CONSTRAINT `person_history_history_id_fkey` FOREIGN KEY (`history_id`) REFERENCES `history`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `person_history` ADD CONSTRAINT `person_history_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
