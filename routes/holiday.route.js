import express from "express"
import { SaveHoliday, deleteHoliday, saveWorkingHours, viewHoliday, viewHolidayById, viewWorkingHours } from "../controller/holiday.controller.js";

const router = express.Router();

router.post("/save-holiday", SaveHoliday);
router.get("/view-holiday/:database", viewHoliday)
router.get("/view-holiday-by-id/:id", viewHolidayById);
router.delete("/delete-holiday/:id", deleteHoliday)

router.post("/workingHours", saveWorkingHours)
router.get("/view-working/:database", viewWorkingHours)

export default router;