const fs = require("fs/promises");
const path = require("path");
const { stringify } = require("csv-stringify/sync");

const CSV_FILE = path.join(process.cwd(), "backend", "data", "inquiries.csv");

async function appendInquiryToCsv({
  full_name,
  phone_number,
  business_name,
  project_type,
  timestamp,
}) {
  await fs.mkdir(path.dirname(CSV_FILE), { recursive: true });

  const row = stringify([[full_name, phone_number, business_name, project_type, timestamp]], {
    header: false,
  });

  try {
    await fs.access(CSV_FILE);
  } catch {
    const header = stringify(
      [["full_name", "phone_number", "business_name", "project_type", "timestamp"]],
      { header: false },
    );
    await fs.writeFile(CSV_FILE, header, "utf8");
  }

  await fs.appendFile(CSV_FILE, row, "utf8");
  return { saved: true, file: CSV_FILE };
}

module.exports = { appendInquiryToCsv };
