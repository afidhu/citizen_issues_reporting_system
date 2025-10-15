import { Router } from "express";
import { addComment, getAllComments } from "../controller/commentController.ts";


const router =Router()


router.post('/',addComment)
router.get('/',getAllComments)


export default router