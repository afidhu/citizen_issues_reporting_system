import type { Request, Response } from "express";
import { prisma } from "../index.ts";
import { table } from "console";
import { any } from "zod";
import { tr } from "zod/v4/locales";


export const addCategoryIssuesController = async (req: Request, resp: Response) => {

    try {
        const { category_name } = req.body
        const addData = await prisma.categories.create({
            data: {
                category_name: category_name
            }
        })

        if (addData) {
            return resp.status(201).json(addData)
        }
        else {
            return resp.status(400).json({ smg: 'fail to insert category_name' })
        }
    } catch (error) {
        return resp.status(500).json({ smg: 'internal Error', error: error })

    }
}

export const getAllCategoryIssuesController = async (req: Request, resp: Response) => {
    
    try {
        const result = await prisma.categories.findMany({
            include:{
              issue: true
            }
        })
        if (result) {
            return resp.status(200).json(result)
        }

    } catch (error) {
        return resp.status(500).json({ msg: 'Internal error', error: error })
    }
}

export const filterAnnouncementByCategoryController = async (req: Request, resp: Response) => {
    
    try {
        const result = await prisma.categories.findMany({
            where:{
                category_id: Number(req.params.id)
            },
            include:{
                announcements: {
                    include:{
                        attachments:true,
                        author:true,
                    }
                },

            },
        })
        if (result) {
            return resp.status(200).json(result)
        }

    } catch (error) {
        return resp.status(500).json({ msg: 'Internal error', error: error })
    }
}