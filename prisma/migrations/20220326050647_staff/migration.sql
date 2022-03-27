-- CreateTable
CREATE TABLE `system_staff` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL DEFAULT 'male',
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',
    `sort` INTEGER NOT NULL DEFAULT 100,
    `remark` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` VARCHAR(191) NULL DEFAULT 'admin',
    `updatedBy` VARCHAR(191) NULL DEFAULT 'admin',

    UNIQUE INDEX `system_staff_username_key`(`username`),
    UNIQUE INDEX `system_staff_email_key`(`email`),
    UNIQUE INDEX `system_staff_mobile_key`(`mobile`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
