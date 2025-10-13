import { Router } from "express";
import { addComment } from "../controller/commentController.ts";


const router =Router()


router.post('/',addComment)


export default router