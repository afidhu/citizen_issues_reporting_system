import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); 
import issuessRouter from'./routers/issuessRouter.ts'
import authRouter from'./routers/authRouter.ts'
// import { PrismaClient } from './generated/prisma/index';
import { PrismaClient } from '../generated/client';


import multer from "multer";
import path from "path";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });

// export const upload = multer({ storage });


const port= parseInt(process.env.PORT || '3000', 10);



const app = express();
app.use(express.json());
app.use('/issues',issuessRouter)
app.use('/auth',authRouter)
export const prisma = new PrismaClient()





app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});