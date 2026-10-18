# Google Sheets Integration Setup

Follow these steps to connect the contact form to a Google Workspace Sheet.

## Step 1 — Create the Google Sheet

1. Go to Google Sheets at sheets.google.com
2. Create a new spreadsheet named **Aathi Solar Leads**
3. Add these headers in **Row 1** (exactly as shown):

| Column | Header |
|--------|--------|
| A1 | Timestamp |
| B1 | EB Number |
| C1 | Name |
| D1 | Phone |
| E1 | Email |
| F1 | Address |
| G1 | City |
| H1 | Pincode |
| I1 | Home Type |
| J1 | Source |

## Step 2 — Create Google Apps Script

1. In the spreadsheet, go to **Extensions → Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;

    sheet.appendRow([
      data.timestamp  || new Date().toLocaleString('en-IN'),
      data.ebNumber   || '',
      data.name       || '',
      data.phone      || '',
      data.email      || '',
      data.address    || '',
      data.city       || '',
      data.pincode    || '',
      data.homeType   || '',
      data.source     || 'Website'
    ]);

    // Optional: Send notification email to Ponniah
    // MailApp.sendEmail(
    //   'ponniah@aathisolarenergy.com',
    //   'New Solar Lead: ' + data.name,
    //   'EB No: '    + data.ebNumber  + '\n' +
    //   'Name: '     + data.name      + '\n' +
    //   'Phone: '    + data.phone     + '\n' +
    //   'City: '     + data.city      + '\n' +
    //   'Home Type: '+ data.homeType  + '\n' +
    //   'Address: '  + data.address
    // );

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Aathi Solar Lead Capture API is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3 — Deploy as Web App

1. Click **Deploy → New Deployment**
2. Select type: **Web app**
3. Set **Execute as**: Me (your email)
4. Set **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`)

## Step 4 — Configure the Website

1. Open `src/components/ContactForm.jsx`
2. Find this line near the top:
   ```js
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'
   ```
3. Replace with your actual URL:
   ```js
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```
4. Save the file and redeploy the website.

## Done!

Every form submission will now appear as a new row in your Google Sheet:

| Field | Notes |
|-------|-------|
| Timestamp | Indian Standard Time (IST) |
| EB Number | TNEB service number — mandatory |
| Name | Customer full name — mandatory |
| Phone | Mobile number — mandatory |
| Email | Optional |
| Address | Door no. and street — optional |
| City | Town / city — optional |
| Pincode | 6-digit pin — optional |
| Home Type | Independent House / Apartment or Flat / Villa / Others |
| Source | Always "Website – Book Free Survey" |

To also receive an **email alert** for every new lead, uncomment the `MailApp.sendEmail` block in the Apps Script and redeploy.
