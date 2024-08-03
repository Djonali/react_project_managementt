/*
  Warnings:

  - You are about to drop the `_issuetouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_issuetouser` DROP FOREIGN KEY `_IssueToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_issuetouser` DROP FOREIGN KEY `_IssueToUser_B_fkey`;

-- AlterTable
ALTER TABLE `issue` ADD COLUMN `assignedToUserId` VARCHAR(255) NULL;

-- DropTable
DROP TABLE `_issuetouser`;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignedToUserId_fkey` FOREIGN KEY (`assignedToUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
