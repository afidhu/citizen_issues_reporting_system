
import type { Request, Response } from "express";
import { prisma } from "../index.ts";
import { table } from "console";


export const addUserController = async (req: Request, resp: Response) => {

    try {
        const { name,email,phone,password } = req.body
        const addData = await prisma.users.create({
            data: {
                email:email,
                name:name,
                 password:password,
                 phone:phone
            }
        })

        if (addData) {
            return resp.status(201).json(addData)
        }
        else {
            return resp.status(400).json({ smg: 'fail to insert user' })
        }
    } catch (error) {
        return resp.status(500).json({ smg: 'internal Error', error: error })

    }
}