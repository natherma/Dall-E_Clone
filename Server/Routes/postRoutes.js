import  express  from "express"
import * as dotenv from "dotenv"
import {v2 as cloudinary} from "cloudinary"

import postmodel from "../Mongodb/Models/posts.js"

dotenv.config();


const router = express.Router();
export default router;