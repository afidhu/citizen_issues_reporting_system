import { Router } from "express";
import { AddIssuesController, getIssuesController } from "../controller/issuesController.ts";
import { upload } from "../utils/multer.ts";
import { IssuesMiddleware } from "../middlewere/issuesMiddleware.ts";
 // Multer from your index

const router = Router();

router.get("/", getIssuesController);
router.post("/",[upload.single('file'),IssuesMiddleware, AddIssuesController]);

export default router;
