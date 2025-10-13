/*
  Warnings:

  - Added the required column `categoryId` to the `Announcements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Announcements" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Announcements" ADD CONSTRAINT "Announcements_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
