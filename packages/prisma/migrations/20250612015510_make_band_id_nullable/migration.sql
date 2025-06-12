-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_bandId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "bandId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE SET NULL ON UPDATE CASCADE;
