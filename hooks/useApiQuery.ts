import { ConversionModuleDetails } from '@/prisma/PrismaContext';
import { useState } from 'react';
import {useQuery, useQueryClient} from 'react-query';

const getAllModulesQuery = 'getAllModulesQuery'
const useApiQuery = () => {
    const qc = useQueryClient()
    const [modules, setModules] = useState<ConversionModuleDetails[]>([])
    const refetchInterval = process.env.NEXT_PUBLIC_REFETCH ? Number(process.env.NEXT_PUBLIC_REFETCH) : 2000

    const getModules = async () => fetch('./api/modules')
        .then(async res => setModules(await res.json()))
        .catch(err => console.error('Error fetching modules from db: \n'+JSON.stringify(err, null, 2)))
    
    useQuery([getAllModulesQuery], getModules, { refetchInterval })

    const completeCommand = (id:string, complete: boolean) => {
        const body = JSON.stringify({id, complete})
        return fetch(
        './api/completeCommand', {
          body,
          headers: { "Content-Type": "application/json" },
          method: "POST"
        })
    }

    const completeFile = (id:string) => {
        const body = JSON.stringify({id})
        return fetch(
        './api/completeFile', {
          body,
          headers: { "Content-Type": "application/json" },
          method: "POST"
        })
    }

    const completeModule = (id:string) => {
        const body = JSON.stringify({id})
        return fetch(
        './api/completeModule', {
          body,
          headers: { "Content-Type": "application/json" },
          method: "POST"
        })
    }

    const invalidateQuery = () => qc.invalidateQueries([getAllModulesQuery])
    
    return {modules, completeCommand, completeFile, completeModule, invalidateQuery}
}

export default useApiQuery