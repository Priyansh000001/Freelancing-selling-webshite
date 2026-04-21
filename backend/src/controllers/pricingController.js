const { PRICING_PLANS } = require("../config/pricing");
const { asyncHandler } = require("../utils/asyncHandler");

const getProtectedPricing = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Protected pricing data",
    data: {
      user: req.user,
      plans: PRICING_PLANS,
    },
  });
});

module.exports = { getProtectedPricing };
