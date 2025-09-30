import type { Request, Response } from "express";
import { prisma } from "../index.ts";
import { table } from "console";


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


export const getIssuesController = async (req: Request, resp: Response) => {

    try {
        const result = await prisma.issues.findMany({
            include: {
                category: true,
                locations: true,
                user: true,
                attachments: true
            }
        })
        if (result) {
            return resp.status(200).json(result)
        }

    } catch (error) {
        return resp.status(500).json({ msg: 'Internal error', error: error })
    }
}

export const AddIssuesController = async (req: Request, resp: Response) => {
    try {

        const { userId, title, description, categoryId, latitude, longitude } = req.body;

        // if (!userId || !title || !description || !categoryId) {
        //     return resp.status(400).json({ msg: "Missing required fields" });
        // }

                const postData = await prisma.$transaction(async (tx:any) => {

                    const addIssue = await tx.issues.create({
                        data: {
                            title,
                            description,
                            userId: parseInt(userId),
                            categoryId: parseInt(categoryId),
                        },
                    });

                    await tx.locations.create({
                        data: {
                            address: "03,33", // or dynamic from req.body
                            latitude: parseFloat(latitude),
                            longitude: parseFloat(longitude),
                            issueId: addIssue.issue_id,
                        },
                    });

                    let attachment = null;
                    if (req.file) {
                        const fileUrl = `/uploads/${req.file.filename}`;
                        attachment = await tx.attachments.create({
                            data: {
                                file_url: fileUrl,
                                issueId: addIssue.issue_id,
                            },
                        });
                    }

                    return { issue: addIssue, attachment };
                });

                return resp.status(201).json(postData);

    } catch (error: any) {
        console.error(error);

        return resp.status(500).json({ msg: "internal error", errors: error.message });
    }
};

export const getSingleIssuesController = async (req: Request, resp: Response) => {

    try {
        const { issue_id } = req.params
        const checkExist = await prisma.issues.count({
            where: {
                issue_id: Number(issue_id)
            }
        })
        if (checkExist >= 1) {
            const results = await prisma.issues.findFirst({
                where: {
                    issue_id: Number(issue_id)
                },
                // include:{
                //     attachments:true,
                //     category:true,
                //     locations:true,
                //     user:true
                // },
                select: {
                    title: true,
                    attachments: true,
                    category: true,
                    categoryId: true,
                    description: true,
                    issue_id: true,
                    locations: true,
                    user: true,
                    userId: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true,
                }
            })
            return resp.status(200).json(results)

        } else {
            return resp.status(400).json({ smg: "Issues not available" })
        }
    } catch (error) {

    }
}



export const deleteIssuesController = async (req: Request, resp: Response) => {

    try {

    } catch (error) {

    }
}