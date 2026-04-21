const { google } = require("googleapis");

function buildSafeLeadRow(data) {
  return [
    data.full_name || "",
    data.phone_number || "",
    data.email || "",
    data.selected_plan || "",
    data.timestamp || new Date().toISOString(),
    data.action_type || "",
  ];
}

async function appendLeadToGoogleSheet(leadData) {
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const sheetTab = process.env.GOOGLE_SHEET_TAB || "Leads";

  if (!serviceEmail || !privateKey || !sheetId) {
    return { saved: false, reason: "Google Sheets env config missing" };
  }

  const auth = new google.auth.JWT({
    email: serviceEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const values = [buildSafeLeadRow(leadData)];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetTab}!A:F`,
    valueInputOption: "RAW",
    requestBody: { values },
  });

  return { saved: true };
}

module.exports = { appendLeadToGoogleSheet };
