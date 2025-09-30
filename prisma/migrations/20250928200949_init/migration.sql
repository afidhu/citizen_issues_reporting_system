-- CreateEnum
CREATE TYPE "public"."UserList" AS ENUM ('Citizen', 'Admin', 'Staff');

-- CreateEnum
CREATE TYPE "public"."statusList" AS ENUM ('Pending', 'In_Progress', 'Resolved');

-- CreateTable
CREATE TABLE "public"."Categories" (
    "category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "public"."Users" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "role" "public"."UserList" NOT NULL DEFAULT 'Citizen',
    "password" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."Issues" (
    "issue_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "public"."statusList" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issues_pkey" PRIMARY KEY ("issue_id")
);

-- CreateTable
CREATE TABLE "public"."Locations" (
    "location_id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "issueId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "public"."Attachments" (
    "attachment_id" SERIAL NOT NULL,
    "issue_id" INTEGER NOT NULL,
    "file_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "issueId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attachments_pkey" PRIMARY KEY ("attachment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- AddForeignKey
ALTER TABLE "public"."Issues" ADD CONSTRAINT "Issues_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Issues" ADD CONSTRAINT "Issues_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Locations" ADD CONSTRAINT "Locations_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "public"."Issues"("issue_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attachments" ADD CONSTRAINT "Attachments_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "public"."Issues"("issue_id") ON DELETE RESTRICT ON UPDATE CASCADE;
