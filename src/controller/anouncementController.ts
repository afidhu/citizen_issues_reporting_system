
import type { Request, Response } from "express";
import { prisma } from "../index.ts";
import { table } from "console";
import { any } from "zod";

export const addAnnouncement =async(req:Request,resp:Response)=>{
    try {
        //   const { userId,content,issuesId } = req.body

        const addData = await prisma.announcements.create({
            data:{
                ...req.body
            }
        })


        if(addData){
             let attachment = null;
            if (req.file) {
                const fileUrl = `/uploads/${req.file.filename}`;
                attachment = await prisma.announcementsAttachments.create({
                    data: {
                        file_url: fileUrl,
                          announcementId: Number(addData.announcement_id),
                    },
                });
            }
            return resp.status(201).json(attachment)
        }else{
            return resp.status(404).json({smg:"fail to add announcement"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal error', error:error})
    }
} 


export const getAnnouncement =async(req:Request,resp:Response)=>{
    try {
        //   const { userId,content,issuesId } = req.body

        const addData = await prisma.announcements.findMany({
            include:{
                attachments:true,
                author:true,
            }
        })
        if(addData){
            return resp.status(200).json(addData)
        }else{
            return resp.status(404).json({smg:"fail to get announcement"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal error', error:error})
    }
} 

export const getAnnouncementByCategory =async(req:Request,resp:Response)=>{
    try {
        //   const { userId,content,issuesId } = req.body

        const addData = await prisma.announcements.findMany({
            where:{
                categoryId: Number(req.params.id)
            },
            include:{
                attachments:true,
                author:true,
                category:true
            }
        })
        if(addData){
            return resp.status(200).json(addData)
        }else{
            return resp.status(404).json({smg:"fail to get announcement"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal error', error:error})
    }
} 