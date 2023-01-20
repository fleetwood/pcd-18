import { getAllFiles } from "@/prisma/PrismaContext"
import { NextApiRequest, NextApiResponse } from "next"

const handle = async (req: NextApiRequest, res: NextApiResponse) => res.status(200).json(await getAllFiles())

export default handle
