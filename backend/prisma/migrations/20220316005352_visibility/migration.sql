/*
  Warnings:

  - You are about to drop the column `published` on the `Audio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Audio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "date" TEXT,
    "programId" INTEGER,
    "audio_path" TEXT NOT NULL,
    "cover_path" TEXT,
    CONSTRAINT "Audio_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Audio" ("audio_path", "author", "cover_path", "date", "id", "programId", "title") SELECT "audio_path", "author", "cover_path", "date", "id", "programId", "title" FROM "Audio";
DROP TABLE "Audio";
ALTER TABLE "new_Audio" RENAME TO "Audio";
CREATE TABLE "new_Program" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "cover_path" TEXT
);
INSERT INTO "new_Program" ("author", "id", "title") SELECT "author", "id", "title" FROM "Program";
DROP TABLE "Program";
ALTER TABLE "new_Program" RENAME TO "Program";
CREATE UNIQUE INDEX "Program_title_key" ON "Program"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
