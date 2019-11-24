const express = require('express');
const router = express.Router();
const CalendarController = require('../controller/CalendarController');
const auth = require('../util/auth');


router.get("/calendars", auth.required, CalendarController.index);
router.get("/calendars/:id", auth.required, CalendarController.show);
router.post("/calendars", auth.required, CalendarController.store);

module.exports = router;
