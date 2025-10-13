


import { Router } from "express";
import { getAnnouncement, getAnnouncementByCategory } from "../controller/anouncementController.ts";
import { upload } from "../utils/multer.ts";

const router =Router()

router.post('/',[upload.single('file'),getAnnouncement])
router.get('/',getAnnouncement)
router.get('/category/:id',getAnnouncementByCategory)



    
export default router
