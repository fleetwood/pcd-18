import { getAllModules } from "@/prisma/PrismaContext"
import { NextApiRequest, NextApiResponse } from "next"

const handle = async (req: NextApiRequest, res: NextApiResponse) => res.status(200).json(await getAllModules())

export default handle
