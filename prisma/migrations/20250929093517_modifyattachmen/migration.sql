/*
  Warnings:

  - You are about to drop the column `issue_id` on the `Attachments` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Attachments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Attachments" DROP COLUMN "issue_id",
DROP COLUMN "type";
