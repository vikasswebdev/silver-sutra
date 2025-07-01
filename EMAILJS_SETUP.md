# EmailJS Setup Guide

This guide will help you set up EmailJS to handle form submissions in your Silver Sutra wedding planning website.

## Step 1: Install EmailJS

First, install the EmailJS package:

```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 3: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 4: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:

### For Contact Form (ContactSection):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Phone number
- `{{event_date}}` - Event date
- `{{guest_count}}` - Guest count
- `{{budget}}` - Budget range
- `{{venue}}` - Preferred venue
- `{{message}}` - Message content

### For Wedding Enquiry (WeddingVenues):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{mobile}}` - Mobile number
- `{{message}}` - Message content

4. Save the template and note down the **Template ID**

## Step 5: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 6: Update Configuration

Open `src/lib/emailjs.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
};
```

## Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Fill out and submit the contact forms
3. Check your email to confirm the integration is working

## Email Template Examples

### Contact Form Template:
```
Subject: New Wedding Inquiry from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Event Date: {{event_date}}
Guest Count: {{guest_count}}
Budget: {{budget}}
Preferred Venue: {{venue}}

Message:
{{message}}
```

### Wedding Enquiry Template:
```
Subject: New Wedding Venue Enquiry from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Mobile: {{mobile}}

Message:
{{message}}
```

## Troubleshooting

- **"Service not found"**: Double-check your Service ID
- **"Template not found"**: Verify your Template ID
- **"Invalid public key"**: Ensure your Public Key is correct
- **CORS errors**: Make sure you're using the correct EmailJS domain

## Security Notes

- The Public Key is safe to use in client-side code
- EmailJS handles rate limiting and spam protection
- Consider upgrading to a paid plan for production use

## Support

For EmailJS-specific issues, visit their [documentation](https://www.emailjs.com/docs/) or [support forum](https://www.emailjs.com/community/). 