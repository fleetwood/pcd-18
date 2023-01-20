import Head from 'next/head'
import ConversionModuleUI from '@/components/ConversionModuleUI'
import useApiQuery from '@/hooks/useApiQuery'

export default function Home() {
  const {modules} = useApiQuery()
  const allTasks = modules.map(m=> m.files.map( f => f.ConversionCommand.map(c => c))).flat(3)
  const completeTasks = allTasks.filter( t => t.complete).length
  const perc = Math.floor(completeTasks/allTasks.length*100)
  const conversions = `All Conversions : (${completeTasks}/${allTasks.length})`
  
  return (
    <>
      <Head>
        <title>PCD-18</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='sticky top-0 w-full lg:w-[80%] lg:m-auto bg-primary z-50 p-6 shadow-xl shadow-black'>
          <h1 className='text-xl text-primary-content font-bold uppercase ml-4'>{conversions}</h1>
          <progress className='progress progress-success h-6' value={Number.isNaN(perc) ? 0 : perc} max={100} />
        </div>
        <div className='flex flex-col px-4 pt-8 w-full lg:w-[80%] lg:m-auto'>
        {modules.map((module) => 
          <ConversionModuleUI module={module} key={module.id} />
        )}
        </div>
      </main>
    </>
  )
}
