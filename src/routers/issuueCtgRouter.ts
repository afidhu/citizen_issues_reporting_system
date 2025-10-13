import { Router } from "express";
import { AddIssuesController, getIssuesController } from "../controller/issuesController.ts";
import { upload } from "../utils/multer.ts";
import { is } from "zod/v4/locales";
import { addCategoryIssuesController, filterAnnouncementByCategoryController, getAllCategoryIssuesController } from "../controller/issuesCategories.ts";
 // Multer from your index

const router = Router();

router.get("/", getAllCategoryIssuesController);
router.post("/", addCategoryIssuesController );
router.get("/:id", filterAnnouncementByCategoryController);


export default router;


