import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); 
import issuessRouter from'./routers/issuesRouter.ts'
import authRouter from'./routers/authRouter.ts'
import commentRouter from'./routers/issuesRouter.ts'
// import { PrismaClient } from './generated/prisma/index';
import { PrismaClient } from '../generated/client';
import issuueCtgRouter from'./routers/issuueCtgRouter.ts'


import multer from "multer";
import path from "path";
import announcementRouter from './routers/announcementRouter.ts';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });

// export const upload = multer({ storage });


const port= parseInt(process.env.PORT || '3000', 10);



const app = express();
app.use(express.json());
export const prisma = new PrismaClient()

app.use('/issues',issuessRouter)
app.use('/auth',authRouter)
app.use('/comment',commentRouter)
app.use('/announcement-category',issuueCtgRouter)
app.use('/announcement',announcementRouter)

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));








app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});