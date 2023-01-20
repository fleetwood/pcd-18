import { ConversionFileDetails } from "@/prisma/PrismaContext"
import ProgressBar from "./ProgressBar"
import React from "react"
import useApiQuery from "@/hooks/useApiQuery"
import { ConversionCommand } from ".prisma/client"
import ConversionCommandFC from "./ConversionCommandUI"

type ConversionFileProps = {
  file: ConversionFileDetails
}

const ConversionFileUI = ({ file }: ConversionFileProps) => {
  const progress = file.commands.filter((f) => f.complete).length / file.commands.length*100

  return (
    <div className="max-w-full px-4 ml-4 my-4">
      <div
        tabIndex={0}
        className="collapse bg-base-100 bg-opacity-30 rounded-box shadow-sm shadow-black"
      >
        <ProgressBar
          title={file.name}
          progress={progress}
          isComplete={file.complete}
        />
        <div className="collapse-content">
          {file.commands.map((c) => (
            <ConversionCommandFC command={c} key={c.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConversionFileUI
