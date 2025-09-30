import { Request, Response } from "express";
import { prisma } from "../index.ts";

export const insertLocation = async (req: Request, resp: Response) => {

    try {
        const { latitude, longitude, address, issueId } = req.body

        const checkIssuesId = await prisma.issues.count({
            where: {
                issue_id: Number(issueId)
            }
        })
        if (checkIssuesId <= 0) {
            return resp.status(400).json({ smg: "issues id Not Found" })
        } else {
            const postData = await prisma.locations.create({
                data: {
                    address: address,
                    latitude: latitude,
                    longitude: longitude,
                    issueId: issueId,
                }
            })
            if (postData) {
                return resp.status(201).json(postData)
            } else {
                return resp.status(400).json({ smg: 'Error to insert Location' })
            }
        }
    } catch (error) {
        return resp.status(500).json({ smg: 'Internal Error', error: error })
    }
}