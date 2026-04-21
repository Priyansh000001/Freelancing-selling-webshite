const express = require("express");
const { authRequired } = require("../middleware/auth");
const { getProtectedPricing } = require("../controllers/pricingController");

const router = express.Router();

router.get("/protected", authRequired, getProtectedPricing);

module.exports = router;
