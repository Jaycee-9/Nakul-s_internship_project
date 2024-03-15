import { Router } from "express";

import { userSubscribe } from "../controller/email-controller.js";

const router = Router();

router.post("/subscribe", userSubscribe);

export default router;
