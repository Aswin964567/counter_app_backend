import express from "express";
import {
  createCounter,
  getCounters,
  incrementCounter,
} from "../controllers/counterController.js";

const router = express.Router();

router.get("/", getCounters);
router.post("/", createCounter);
router.put("/:id/increment", incrementCounter);

export default router;
