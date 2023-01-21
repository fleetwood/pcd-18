import Head from "next/head";
import ConversionModuleUI from "@/components/ConversionModuleUI";
import useApiQuery from "@/hooks/useApiQuery";
import { themeChange } from "theme-change";
import { useEffect } from "react";

export default function Home() {
  const { modules } = useApiQuery();
  const allTasks = modules
    .map((m) => m.files.map((f) => f.ConversionCommand.map((c) => c)))
    .flat(3);
  const completeTasks = allTasks.filter((t) => t.complete).length;
  const perc = Math.floor((completeTasks / allTasks.length) * 100);
  const conversions = `All Conversions : (${completeTasks}/${allTasks.length})`;
  const themeValues = [
    "aqua",
    "coffee",
    "cupcake",
    "cyberpunk",
    "dark",
    "dracula",
    "light",
    "luxury",
    "retro",
    "winter",
  ]

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Head>
        <title>PCD-18</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="sticky top-0 w-full lg:w-[80%] lg:m-auto bg-primary z-50 p-6 shadow-xl shadow-black">
          <div className="flow-root mb-2">
            <h1 className="text-xl text-primary-content font-bold uppercase ml-4 mt-2 float-left">
              {conversions}
            </h1>
            <select className="text-primary w-fit float-right p-2 rounded-lg focus:outline-none" data-choose-theme>
              <option className="text-primary" value="">Default</option>
              {themeValues.map((theme) => (
                <option className="text-primary rounded-md" key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
          <progress
            className="progress progress-success h-6"
            value={Number.isNaN(perc) ? 0 : perc}
            max={100}
          />
        </div>
        <div className="flex flex-col px-4 pt-8 w-full lg:w-[80%] lg:m-auto">
          {modules.map((module) => (
            <ConversionModuleUI module={module} key={module.id} />
          ))}
        </div>
      </main>
    </>
  );
}
