-- CreateTable
CREATE TABLE "Program" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "categories" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "cover_path" TEXT
);

-- CreateTable
CREATE TABLE "Audio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "streams" INTEGER NOT NULL DEFAULT 0,
    "programId" INTEGER NOT NULL,
    "categories" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "audio_path" TEXT NOT NULL,
    "cover_path" TEXT,
    CONSTRAINT "Audio_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
