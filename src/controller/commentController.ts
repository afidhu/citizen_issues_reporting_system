import type { Response, Request } from "express"
import { prisma } from "../index.ts"


export const getAllComment =async(req:Request,resp:Response)=>{
    try {
          const { userId,content,issuesId } = req.body

        const allcomment = await prisma.comments.findMany({
            include:{
                issues:true,
                user:true
            }
        })
        
        if(allcomment){
            return resp.status(200).json(allcomment)
        }else{
            return resp.status(404).json({smg:"fail to add allcomment"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal errror', error:error})
    }
} 

export const addComment =async(req:Request,resp:Response)=>{
    try {
          const { userId,content,issuesId } = req.body

        const addData = await prisma.comments.create({
            data:{
                content:content,
                userId:userId,
                issuesId:issuesId
            }
        })
        
        if(addData){
            return resp.status(200).json(addData)
        }else{
            return resp.status(404).json({smg:"fail to add comment"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal errror', error:error})
    }
} 



export const deleteComment =async(req:Request,resp:Response)=>{
    try {
        const{id} = req.params
        const deleteData = await prisma.comments.delete({
            where:{
                id:Number(id)
            }
        })
        
        if(deleteData){
            return resp.status(204).json(deleteData)
        }else{
            return resp.status(404).json({smg:"fail to delete comment"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal errror', error:error})
    }
} 

export const updateComment =async(req:Request,resp:Response)=>{
    try {
             const{id} = req.params
          const {content} = req.body

        const updateData = await prisma.comments.update({
            where:{
                id:Number(id)
            },
            data:{
                content:content,
            },
            select:{
                content:true,
                id:true,
                issues:true,
                issuesId:true,
                user:true,
                userId:true
            },
        })
        
        if(updateData){
            return resp.status(200).json(updateData)
        }else{
            return resp.status(404).json({smg:"fail to add updateData"})
        }
    } catch (error) {
        return resp.status(500).json({smg:'internal errror', error:error})
    }
} 