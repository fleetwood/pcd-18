import { ConversionFileDetails } from "@/prisma/PrismaContext"
import ProgressBar from "./ProgressBar"
import React, { useEffect } from "react"
import { ConversionModule } from ".prisma/client"
import useApiQuery from "@/hooks/useApiQuery"
import ConversionCommandUI from "./ConversionCommandUI"

type ConversionFileProps = {
  file: ConversionFileDetails
  module: ConversionModule
  onFileUpdate: Function
}

const ConversionFileUI = ({file, module, onFileUpdate: onFileUpdate}: ConversionFileProps) => {
  const {id, name, complete, ConversionCommand} = file;
  const progress = file.ConversionCommand.filter((f) => f.complete).length / file.ConversionCommand.length*100
  const {completeFile} = useApiQuery()

  const onCommandUpdate = () => {
    console.log(`ConversionFileUI onUpdate`)
    completeFile(id)
     .then(() => {
        console.log(`\tConversionFileUI updated`)
        onFileUpdate()
      })
      .catch(e => {
        console.log(`\tConversionFileUI update FAIL ${e.message}`)
      })
  }

  return (
    <div className="max-w-full px-4 ml-4 my-4">
      <div
        tabIndex={0}
        className="collapse bg-base-100 bg-opacity-30 rounded-box shadow-sm shadow-black"
      >
        <ProgressBar
          title={name}
          progress={progress}
          isComplete={complete}
        />
        <div className="collapse-content">
          {ConversionCommand.map((command) => (
            <ConversionCommandUI {...{command,module,file,onCommandUpdate}} key={command.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConversionFileUI
