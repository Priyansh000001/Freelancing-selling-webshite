const express = require("express");
const { savePlanLead, saveInquiry } = require("../controllers/leadController");

const router = express.Router();

router.post("/save-plan", savePlanLead);
router.post("/inquiry", saveInquiry);

module.exports = router;
