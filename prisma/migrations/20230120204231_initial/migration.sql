-- CreateTable
CREATE TABLE "ConversionCommand" (
    "id" STRING NOT NULL,
    "complete" BOOL NOT NULL DEFAULT false,
    "code" STRING NOT NULL,
    "fileId" STRING NOT NULL,

    CONSTRAINT "ConversionCommand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversionFile" (
    "id" STRING NOT NULL,
    "complete" BOOL NOT NULL DEFAULT false,
    "name" STRING NOT NULL,
    "moduleId" STRING NOT NULL,

    CONSTRAINT "ConversionFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversionModule" (
    "id" STRING NOT NULL,
    "complete" BOOL NOT NULL DEFAULT false,
    "name" STRING NOT NULL,

    CONSTRAINT "ConversionModule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConversionCommand" ADD CONSTRAINT "ConversionCommand_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "ConversionFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversionFile" ADD CONSTRAINT "ConversionFile_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ConversionModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
