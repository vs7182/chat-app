import { Router } from "express";
import {verifyToken} from "../middlewares/AuthMiddleware.js"
import { getMessages } from "../controllers/MessagesController.js";

const router = Router();

router.post("/get-messages",verifyToken,getMessages);

export default router;