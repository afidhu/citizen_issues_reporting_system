-- CreateTable
CREATE TABLE "public"."AnnouncementsAttachments" (
    "attachment_id" SERIAL NOT NULL,
    "file_url" TEXT NOT NULL,
    "announcementId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnnouncementsAttachments_pkey" PRIMARY KEY ("attachment_id")
);

-- CreateTable
CREATE TABLE "public"."Announcements" (
    "announcement_id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcements_pkey" PRIMARY KEY ("announcement_id")
);

-- AddForeignKey
ALTER TABLE "public"."AnnouncementsAttachments" ADD CONSTRAINT "AnnouncementsAttachments_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "public"."Announcements"("announcement_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Announcements" ADD CONSTRAINT "Announcements_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
