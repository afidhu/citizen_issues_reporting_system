import type { Request, Response, NextFunction } from "express";
import { number, ZodError } from "zod";
import { issueSchema } from "../schema/issues.schema.ts";
import { prisma } from "../index.ts";


export const IssuesMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
    console.log(req.body)

    try {

        const { userId, title, description, categoryId, } = issueSchema.parse(req.body)

        if (!userId || !title || !description || !categoryId) {
            return resp.status(400).json({ msg: "Missing required fields" });
        }


        const checkExistId = await prisma.users.findFirst({
            where: {
                user_id:Number(userId)
            }
        })
        if (!checkExistId) {
            return resp.status(400).json('UserId not exist')
        }
        else {
            const checkExistcategoryId = await prisma.categories.findFirst({
                where: {
                    category_id: Number(categoryId)
                }
            })

            if (!checkExistcategoryId) {
                return resp.status(400).json('category not exist')
            }
            else {
                next(); // everything is valid
            }
        }


    } catch (error: any) {
        if (error instanceof ZodError) {
            return resp.status(400).json({
                errors: error.issues.map((e) => e.message), // readable messages
            });
        }

        resp.status(500).json({
            status: "error",
            message: error.message || "Internal Server Error",
        });
    }
    ;
}