import express from "express";
import { sendRequest, updateRequest, deleteRequest, getAllRequests } from "../controller/ticket.js";
const router = express.Router();
router.post("/send", sendRequest);
router.patch("/update/:id", updateRequest);
router.delete("/delete/:id", deleteRequest);
router.get("/all", getAllRequests);
export default router;