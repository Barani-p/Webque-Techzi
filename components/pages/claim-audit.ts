import { google } from "googleapis";
import { JWT } from "google-auth-library";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { name, email, message } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name & email required" });

  try {
    const credentials = require(path.resolve(process.cwd(), process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH!));

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Leads!A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toISOString(), name, email, message]],
      },
    });

    res.status(200).json({ message: "Lead added successfully" });
  } catch (err) {
    console.error("Google Sheets error:", err);
    res.status(500).json({ error: "Failed to save lead" });
  }
}
