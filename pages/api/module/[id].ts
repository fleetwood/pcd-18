import { getModule } from "@/prisma/PrismaContext"
import { NextApiRequest, NextApiResponse } from "next"

const handle = async (req: NextApiRequest, res: NextApiResponse) => res.status(200).json(await getModule(req.query.id as string))

export default handle