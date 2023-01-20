-- CreateTable
CREATE TABLE "ConversionCommand" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "code" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    CONSTRAINT "ConversionCommand_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ConversionFile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ConversionFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    CONSTRAINT "ConversionFile_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ConversionModule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ConversionModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL
);
