import React, { useEffect, useState } from "react";
import useApiQuery from "@/hooks/useApiQuery";
import {
  ConversionCommand,
  ConversionModule,
  ConversionFile,
} from ".prisma/client";

type ConversionFileProps = {
  command: ConversionCommand;
  file: ConversionFile;
  module: ConversionModule;
  onCommandUpdate: Function;
};

const ConversionCommandUI = ({
  command,
  file,
  module,
  onCommandUpdate,
}: ConversionFileProps) => {
  const { completeCommand, invalidateQuery } = useApiQuery();
  const [status, setStatus] = useState("bg-accent");

  useEffect(() => {
    setStatus(command.complete ? "bg-success" : "bg-accent");
  }, [command]);

  const handleComplete = async () => {
    console.log(`ConversionCommandUI handleComplete`);
    await completeCommand(command.id, !command.complete)
      .then(async () => {
        console.log(`\tConversionCommandUI handleCompleted`);
        onCommandUpdate();
      })
      .then(() =>
        setStatus((current) => (!command.complete ? "bg-success" : "bg-accent"))
      )
      .catch((e) =>
        console.log(`\tConversionCommandUI update FAIL ${e.message}`)
      );
  };

  return (
    <div
      className={`flex ${status} even:bg-opacity-20 odd:bg-opacity-30 my-2 rounded-full`}
      key={command.id}
    >
      <div
        onClick={(e) => {
          // e.preventDefault
          // e.bubbles = false
          handleComplete();
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
      <div
        className={`text-sm ${
          command.complete ? "text-success-content" : "text-content"
        } px-2 overflow-x-hidden font-mono flex space-x-4`}
      >
        <pre
          className={`overflow-x-auto scrollbar scrollbar-track-transparent scrollbar-rounded-full scrollbar-h-2 ${
            command.complete
              ? "scrollbar-thumb-success"
              : "scrollbar-thumb-info"
          }`}
        >
          {command.code}
        </pre>
      </div>
    </div>
  );
};

export default ConversionCommandUI;
