import { Modern_Antiqua } from "@next/font/google";
import {
  ConversionCommand,
  ConversionFile,
  ConversionModule,
  PrismaClient,
} from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

var prisma: PrismaClient;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

/**
 * Prisma Client is a singleton in the global scope
 * @type {PrismaClient}
 */
export { prisma };

export type ConversionModuleDetails = ConversionModule & {
  files: ConversionFileDetails[];
};
export type ConversionFileDetails = ConversionFile & {
  ConversionCommand: ConversionCommand[];
};

export const getModule = async(id:string) => await prisma.conversionModule.findUnique({where: {id}});
export const getFile = async(id:string) => await prisma.conversionFile.findUnique({where: {id}});
export const getCommand = async(id:string) => await prisma.conversionCommand.findUnique({where: {id}});

export const getAllModules = async () => {
  return await prisma.conversionModule.findMany({
    include: {
      files: {
        include: {
          ConversionCommand: true,
        },
      },
    },
  });
};

export const getAllFiles = async () => {
  return await prisma.conversionFile.findMany({
    include: {
      ConversionCommand: true,
    },
  });
};

export const completeCommand = async (id: string, complete: boolean) => {
  console.log("Context completeCommand ", id, complete);
  try {
    const command = await prisma.conversionCommand.findUnique({where: {id}});
    if (!command) {
      console.error("Command not found", id)
    }
    return await prisma.conversionCommand.update({
      where: {
        id,
      },
      data: {
        complete,
      },
    });
  } catch (error) {
    console.error(`\tContext completeCommand ERROR: ${JSON.stringify(error, null, 2)}`)
    throw(error)
  }
  
};

export const completeFile = async (id: string) => {
  console.log("Context completeFile ", id);
  try {
    const file = await prisma.conversionFile.findUnique({
      where: { id },
      include: { ConversionCommand: true },
    });
    const complete = file?.ConversionCommand
      ? file.ConversionCommand.filter((f) => f.complete).length === file.ConversionCommand.length
      : false;
    return await prisma.conversionFile.update({
      where: {
        id,
      },
      data: {
        complete,
      },
    });
  } catch (error) {
    console.error(`\tContext completeFile ERROR: ${JSON.stringify(error, null, 2)}`)
    throw(error)
  }
};

export const completeModule = async (id: string) => {
  console.log("Context completeModule ", id);
  try {
    const module = await prisma.conversionModule.findUnique({
      where: { id },
      include: { files: true },
    });
    const moduleData = {
      id: module?.id,
      complete:module?.files.filter((f) => f.complete).length,
      total:module?.files.length
    }
  
    console.log("\tContext completeModule ", JSON.stringify(moduleData, null, 2));
    const complete = module?.files
      ? module.files.filter((f) => f.complete).length === module.files.length
      : false;
    return await prisma.conversionModule.update({
      where: {
        id,
      },
      data: {
        complete,
      },
    });
  } catch (error) {
    console.error(`\tContext completeModule ERROR: ${JSON.stringify(error, null, 2)}`)
    throw(error)
  }
  
};

