
import { Router } from "express";
import { addUserController } from "../controller/authController.ts";

const router =Router()

router.post('/register',addUserController)



export default router
