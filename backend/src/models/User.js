const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    full_name: { type: String, trim: true },
    phone_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: { type: String, trim: true, lowercase: true },
    password_hash: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
