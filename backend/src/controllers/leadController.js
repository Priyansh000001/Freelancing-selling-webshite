const { asyncHandler } = require("../utils/asyncHandler");
const { appendLeadToGoogleSheet } = require("../utils/googleSheets");
const { appendInquiryToCsv } = require("../utils/csvLogger");

const phonePattern = /^\+?[1-9]\d{9,14}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(phone = "") {
  return phone.replace(/\s+/g, "");
}

const savePlanLead = asyncHandler(async (req, res) => {
  const {
    full_name = "",
    phone_number,
    email = "",
    selected_plan = "",
    action_type = "save_plan",
  } = req.body || {};

  const normalizedPhone = normalizePhone(phone_number);

  if (!phonePattern.test(normalizedPhone)) {
    return res.status(400).json({ success: false, message: "Valid phone_number is required" });
  }

  if (email && !emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }

  const timestamp = new Date().toISOString();
  await appendLeadToGoogleSheet({
    full_name,
    phone_number: normalizedPhone,
    email,
    selected_plan,
    timestamp,
    action_type,
  });

  return res.status(200).json({
    success: true,
    message: "Lead saved successfully",
    data: {
      full_name,
      phone_number: normalizedPhone,
      email,
      selected_plan,
      timestamp,
      action_type,
    },
  });
});

const saveInquiry = asyncHandler(async (req, res) => {
  const {
    full_name,
    phone_number,
    business_name = "",
    project_type = "",
    timestamp = new Date().toISOString(),
  } = req.body || {};

  const normalizedPhone = normalizePhone(phone_number);

  if (!full_name || !normalizedPhone || !project_type) {
    return res.status(400).json({
      success: false,
      message: "full_name, phone_number and project_type are required",
    });
  }

  if (!phonePattern.test(normalizedPhone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number",
    });
  }

  await appendInquiryToCsv({
    full_name,
    phone_number: normalizedPhone,
    business_name,
    project_type,
    timestamp,
  });

  await appendLeadToGoogleSheet({
    full_name,
    phone_number: normalizedPhone,
    email: "",
    selected_plan: project_type,
    timestamp,
    action_type: "inquiry",
  }).catch((error) => {
    console.warn("Google sheet inquiry logging failed:", error.message);
  });

  return res.status(201).json({
    success: true,
    message: "Inquiry saved successfully",
  });
});

module.exports = { savePlanLead, saveInquiry };
