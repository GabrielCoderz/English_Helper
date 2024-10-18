import { Router } from "express";
import { isAuthenticated } from "../../middleware/auth.user";
import { TranscriptController } from "../../controller/transcript/TranscriptController";

const router = Router()

router.post('/', new TranscriptController().handle);


export default router