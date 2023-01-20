import { Modern_Antiqua } from "@next/font/google"
import {
  ConversionCommand,
  ConversionFile,
  ConversionModule,
  PrismaClient,
} from "@prisma/client"

declare global {
  var prisma: PrismaClient
}

var prisma: PrismaClient

if (!global.prisma) {
  global.prisma = new PrismaClient()
}
prisma = global.prisma

/**
 * Prisma Client is a singleton in the global scope
 * @type {PrismaClient}
 */
export { prisma }

export type ConversionModuleDetails = ConversionModule & {
    files: ConversionFileDetails[]
}
export type ConversionFileDetails = (ConversionFile & {
    commands: ConversionCommand[]
})

export const getAllModules = async () => {
  return await prisma.conversionModule.findMany({
    include: {
      files: {
        include: {
          commands: true,
        },
      },
    },
  })
}

export const getAllFiles = async () => {
  return await prisma.conversionFile.findMany({
        include: {
          commands: true,
        },
  })
}

export const completeTask = async (id: string, complete: boolean) => {
  console.log('Context completeTask ', id, complete)
  return await prisma.conversionCommand.update({
    where: {
      id,
    },
    data: {
      complete
    }
  })
}

export const updateAll = async () => {
  // first update all the files
  try {
    const updateConversionFile = (where: {id: string}, data: {complete:boolean}) => prisma.conversionFile.update({where, data})
    const updateConversionModule = (where: {id: string}, data: {complete:boolean}) => prisma.conversionModule.update({where, data})

    const files = await getAllFiles()
    const fileUpdates = files.map(file => {
      return updateConversionFile(
        {id: file.id},
        {
          complete: file.commands.filter(f => f.complete).length 
                    === file.commands.length
        }
      )
    })

    // then update all the modules
    const modules = await getAllModules()
    const moduleUpdates = modules.map(mod => {
      return updateConversionModule(
        {id: mod.id}, 
        {
          complete: mod.files.length 
                    === mod.files.filter(f => f.complete).length
        }
      )
    })

    const success = prisma.$transaction([...fileUpdates, ...moduleUpdates])

    return {success}
  } catch (error) {
    throw(error)
  }
}