import { Router } from "express";

const router = Router();

router.get("/states", getStates);

//router.get("/user/me", info);
// router.get("user/me", update);

export default router;