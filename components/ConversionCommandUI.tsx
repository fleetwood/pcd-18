import { ConversionFileDetails } from "@/prisma/PrismaContext"
import ProgressBar from "./ProgressBar"
import React, { useEffect, useState } from "react"
import useApiQuery from "@/hooks/useApiQuery"
import { ConversionCommand } from ".prisma/client"

type ConversionFileProps = {
  command: ConversionCommand
}

const ConversionCommandUI = ({ command }: ConversionFileProps) => {
  const { complete, updateAll, invalidateQuery } = useApiQuery()
  const [status, setStatus] = useState('info')

  useEffect(() => {
    setStatus(command.complete ? 'success' : 'info')
  }, [command])

  const handleComplete = async () => {
    complete(command.id, !command.complete)
      .then(async () => await updateAll())
      .then(async () => await invalidateQuery())
      .catch((e) => alert(e))
  }

  return (
    <div className={`flex bg-secondary even:bg-opacity-20 odd:bg-opacity-30 my-2 rounded-full`} key={command.id}>
      <div onClick={(e) => {
          // e.preventDefault
          // e.bubbles = false
          handleComplete()
        }}
      >
        {command.complete ? (
          <div className="btn btn-sm bg-green-700 rounded-l-full text-lg min-h-fit">
            ✕
          </div>
        ) : (
          <div className="btn btn-sm bg-blue-600 rounded-l-full text-lg min-h-fit">
            ✓
          </div>
        )}
      </div>
      <div className={`text-sm text-secondary-content px-2 overflow-x-hidden font-mono`}>
        {command.code}
      </div>
    </div>
  )
}

export default ConversionCommandUI
