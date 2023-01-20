import { updateAll } from "@/prisma/PrismaContext"
import { NextApiRequest, NextApiResponse } from "next"

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const update = await updateAll()
    res.status(200).json(update)
}

export default handle
