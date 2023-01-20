import { getCommand } from "@/prisma/PrismaContext"
import { NextApiRequest, NextApiResponse } from "next"

const handle = async (req: NextApiRequest, res: NextApiResponse) => res.status(200).json(await getCommand(req.query.id as string))

export default handle