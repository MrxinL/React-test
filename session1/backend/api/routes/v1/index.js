import express from "express";
import quizRoutes from "./quiz.route";

const router = express.Router();

router.use("/quiz", quizRoutes);

export default router;
