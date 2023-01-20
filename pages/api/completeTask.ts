import { completeTask } from "@/prisma/PrismaContext"
import { NextApiRequest, NextApiResponse } from "next"

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const {id, complete} = req.body
    console.log(`/api/completeTask {${id} ${complete}}`)
    const completed = await completeTask(id, complete)
    let status = 500,
        message = `Ya that didn't work...`;
    if (completed) {
        status = 200
        message = `Ya that worked!`;
    }
    res.status(status).json({ message })
}

export default handle
