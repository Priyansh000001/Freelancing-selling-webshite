require("dotenv").config();
const app = require("./app");
const { connectDb } = require("./config/db");

const port = Number(process.env.PORT || 4000);

async function start() {
  await connectDb();
  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error("Server startup failed:", error.message);
  process.exit(1);
});
