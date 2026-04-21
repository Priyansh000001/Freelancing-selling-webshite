const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const pricingRoutes = require("./routes/pricingRoutes");
const leadRoutes = require("./routes/leadRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:8080",
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "OK" });
});

app.use("/api/auth", authRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/lead", leadRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
