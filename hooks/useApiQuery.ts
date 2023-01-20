import { ConversionModuleDetails, updateAll } from '@/prisma/PrismaContext';
import { useState } from 'react';
import {useQuery, useQueryClient} from 'react-query';

const getAllModulesQuery = 'getAllModulesQuery'
const useApiQuery = () => {
    const qc = useQueryClient()
    const [modules, setModules] = useState<ConversionModuleDetails[]>([])

    const getModules = async () => fetch('./api/modules')
        .then(async res => setModules(await res.json()))
        .catch(err => alert('Error fetching modules from db: \n'+JSON.stringify(err, null, 2)))
    
    useQuery([getAllModulesQuery],
        getModules, 
        { refetchInterval: 1000}
    )

    const complete = (id:string, complete: boolean) => {
        const body = JSON.stringify({id, complete})
        return fetch(
        './api/completeTask', {
          body,
          headers: { "Content-Type": "application/json" },
          method: "POST"
        })
    }

    const updateAll = () => fetch('./api/updateAll')

    const invalidateQuery = () => qc.invalidateQueries([getAllModulesQuery])
    
    return {modules, complete, updateAll, invalidateQuery}
}

export default useApiQuery