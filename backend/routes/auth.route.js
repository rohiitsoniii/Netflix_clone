// import express from "express";
// import { signup, login, logout } from "../controllers/auth.controller.js";
// const router = express.Router();

// router.post("/signup",signup)
// router.post("/login", login)
// router.post("/logout", logout) 

// export default router

import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;