# Google Forms Integration Setup Guide

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Blank" to create a new form
3. Add the following questions to match your contact form:

### Required Fields:
- **Name** (Short answer)
- **Email** (Short answer) 
- **Phone** (Short answer)
- **Event Date** (Date)
- **Guest Count** (Multiple choice)
  - Intimate (Under 50)
  - Medium (50-150)
  - Large (150-300)
  - Grand (300+)
- **Budget Range** (Multiple choice)
  - $50,000 - $100,000
  - $100,000 - $250,000
  - $250,000 - $500,000
  - $500,000+
- **Preferred Venue/Location** (Short answer)
- **Tell Us About Your Vision** (Paragraph)

## Step 2: Get the Form URL

1. Click the "Send" button in your Google Form
2. Click the "Link" tab
3. Copy the form URL (it will look like: `https://docs.google.com/forms/d/1ABC123.../viewform`)
4. Replace `viewform` with `formResponse` in the URL

## Step 3: Find Entry IDs

1. Right-click on your Google Form and select "View page source"
2. Press Ctrl+F (or Cmd+F on Mac) and search for "entry."
3. You'll find entries like `entry.1234567890`, `entry.1234567891`, etc.
4. Note down which entry ID corresponds to which field

## Step 4: Update the Code

In `src/components/ContactSection.tsx`, update these constants:

```typescript
// Replace with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/YOUR_ACTUAL_FORM_ID/formResponse";

// Replace with your actual entry IDs
const FORM_ENTRIES = {
    name: "entry.1234567890", // Replace with actual entry ID for name field
    email: "entry.1234567891", // Replace with actual entry ID for email field
    phone: "entry.1234567892", // Replace with actual entry ID for phone field
    eventDate: "entry.1234567893", // Replace with actual entry ID for event date field
    guestCount: "entry.1234567894", // Replace with actual entry ID for guest count field
    budget: "entry.1234567895", // Replace with actual entry ID for budget field
    venue: "entry.1234567896", // Replace with actual entry ID for venue field
    message: "entry.1234567897" // Replace with actual entry ID for message field
};
```

## Step 5: Test the Integration

1. Fill out your contact form on your website
2. Submit the form
3. Check your Google Form responses to confirm the data was received

## Alternative: Using Google Apps Script (More Advanced)

If you want more control over the form submission process, you can use Google Apps Script:

1. Create a Google Apps Script project
2. Deploy it as a web app
3. Use the web app URL instead of the direct form URL
4. This allows you to add custom validation, email notifications, etc.

## Benefits of Using Google Forms

✅ **No server required** - Google handles all the backend
✅ **Automatic data collection** - Responses go directly to Google Sheets
✅ **Easy to manage** - View, export, and analyze responses easily
✅ **Free** - No additional costs
✅ **Reliable** - Google's infrastructure handles the load
✅ **Integration** - Can connect to other Google services

## Troubleshooting

- **CORS errors**: The `mode: 'no-cors'` setting should handle this
- **Form not submitting**: Double-check your entry IDs
- **Data not appearing**: Make sure your Google Form is set to accept responses
- **Network errors**: Check your internet connection and try again

## Security Notes

- Google Forms are public by default
- Consider adding CAPTCHA to your form if needed
- The form data is stored on Google's servers
- You can set up email notifications for new responses 