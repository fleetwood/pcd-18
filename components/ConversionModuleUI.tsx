import { ConversionModuleDetails } from "@/prisma/PrismaContext";
import React from "react";
import ConversionFileUI from "./ConversionFileUI";
import useApiQuery from "@/hooks/useApiQuery";

type ConversionModuleProps = {
  module: ConversionModuleDetails
};

const ConversionModuleUI = ({ module }: ConversionModuleProps) => {
  const progress = Math.floor(module.files.filter((f) => f.complete).length / module.files.length*100)
  const isComplete = module.complete ? 'text-success' : 'text-info'
  const {completeModule, invalidateQuery} = useApiQuery()

  const onFileUpdate = () => {
    console.log(`ConversionModuleUI onUpdate`)
    completeModule(module.id)
     .then(() => {
        console.log(`\tConversionModuleUI updated`)
        invalidateQuery()
      })
      .catch(e => {
        console.log(`\tConversionModuleUI update FAIL ${e.message}`)
      })
  }

  return (
    <div className="ml-2 my-4 p-2 rounded-xl bg-gray-200 shadow-lg shadow-black">
      <h1 className={`mt-4 text-lg font-semibold ml-4 ${isComplete}`}>{module.name} ({progress}%)</h1>
      <progress
        className="progress progress-success h-4 w-full px-4"
        value={Math.floor(progress)}
        max="100"
      ></progress>

      {module.files.map((file) => (
        <ConversionFileUI {...{file, module, onFileUpdate}} key={file.id} />
      ))}
    </div>
  );
};

export default ConversionModuleUI;
