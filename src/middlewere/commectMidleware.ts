import type { Request, Response, NextFunction } from "express";
import { number, ZodError } from "zod";
import { prisma } from "../index.ts";
import { commentSchema } from "../schema/comment.schema.ts";


export const CommentsMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
    console.log(req.body)

    try {

        const { userId,content,issuesId } = commentSchema.parse(req.body)

        if (!userId || !content || !issuesId) {
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
            const checkExistcategoryId = await prisma.issues.findFirst({
                where: {
                    issue_id: Number(issuesId)
                }
            })

            if (!checkExistcategoryId) {
                return resp.status(400).json('category not exist')
            }
            else {
                next(); 
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




