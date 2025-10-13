import z from "zod";


export const commentSchema = z.object({
    issuesId:z.int().min(1,'not less than 1'),
    userId:z.int().min(1,'not less than 1'),
    content:z.string().min(1,'not less than 1').max(100,'not more than one')

})