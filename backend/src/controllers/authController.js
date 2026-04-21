const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { asyncHandler } = require("../utils/asyncHandler");
const { appendLeadToGoogleSheet } = require("../utils/googleSheets");

const phonePattern = /^\+?[1-9]\d{9,14}$/;

function normalizePhone(phone = "") {
  return phone.replace(/\s+/g, "");
}

function createToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), phone_number: user.phone_number },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
  );
}

const signup = asyncHandler(async (req, res) => {
  const { phone_number, password, full_name = "", email = "" } = req.body || {};

  const normalizedPhone = normalizePhone(phone_number);

  if (!phonePattern.test(normalizedPhone)) {
    return res.status(400).json({
      success: false,
      message: "Valid phone_number is required",
    });
  }

  if (!password || String(password).length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters",
    });
  }

  const existingUser = await User.findOne({ phone_number: normalizedPhone });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists with this phone number",
    });
  }

  const password_hash = await bcrypt.hash(String(password), 12);
  const user = await User.create({
    full_name,
    email,
    phone_number: normalizedPhone,
    password_hash,
  });

  const timestamp = new Date().toISOString();
  await appendLeadToGoogleSheet({
    full_name,
    email,
    phone_number: normalizedPhone,
    selected_plan: "",
    timestamp,
    action_type: "signup",
  }).catch((error) => {
    console.warn("Google sheet signup logging failed:", error.message);
  });

  const token = createToken(user);
  return res.status(201).json({
    success: true,
    message: "Signup successful",
    data: {
      token,
      user: {
        id: user._id,
        phone_number: user.phone_number,
        full_name: user.full_name,
        email: user.email,
      },
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { phone_number, password } = req.body || {};
  const normalizedPhone = normalizePhone(phone_number);

  if (!phonePattern.test(normalizedPhone) || !password) {
    return res.status(400).json({
      success: false,
      message: "phone_number and password are required",
    });
  }

  const user = await User.findOne({ phone_number: normalizedPhone });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const matched = await bcrypt.compare(String(password), user.password_hash);
  if (!matched) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const timestamp = new Date().toISOString();
  await appendLeadToGoogleSheet({
    full_name: user.full_name || "",
    email: user.email || "",
    phone_number: user.phone_number,
    selected_plan: "",
    timestamp,
    action_type: "login",
  }).catch((error) => {
    console.warn("Google sheet login logging failed:", error.message);
  });

  const token = createToken(user);
  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      token,
      user: {
        id: user._id,
        phone_number: user.phone_number,
        full_name: user.full_name,
        email: user.email,
      },
    },
  });
});

module.exports = { signup, login };
