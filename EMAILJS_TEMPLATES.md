# EmailJS Templates

Copy and paste these templates directly into your EmailJS dashboard.

## Template 1: Contact Form (ContactSection)

**Template Name:** Silver Sutra Contact Form
**Template ID:** Use the ID provided by EmailJS

### Subject Line:
```
New Wedding Inquiry from {{from_name}}
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Wedding Inquiry</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #2c3e50;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .header {
            background: linear-gradient(135deg, #eac88c 0%, #f2dcb4 100%);
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
            margin-bottom: 0;
        }
        .header h1 {
            color: #2c3e50;
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }
        .info-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #eac88c;
        }
        .info-label {
            font-weight: bold;
            color: #eac88c;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .info-value {
            color: #2c3e50;
            font-size: 16px;
        }
        .message-section {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .message-label {
            font-weight: bold;
            color: #eac88c;
            margin-bottom: 10px;
            display: block;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🌟 New Wedding Inquiry</h1>
        <p style="margin: 10px 0 0 0; color: #2c3e50;">Silver Sutra Wedding Planning</p>
    </div>
    
    <div class="content">
        <p style="font-size: 18px; margin-bottom: 30px;">
            You have received a new wedding inquiry from <strong>{{from_name}}</strong>.
        </p>
        
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">{{from_name}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">{{from_email}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">{{phone}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Event Date</div>
                <div class="info-value">{{event_date}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Guest Count</div>
                <div class="info-value">{{guest_count}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Budget Range</div>
                <div class="info-value">{{budget}}</div>
            </div>
        </div>
        
        <div class="info-item" style="grid-column: 1 / -1;">
            <div class="info-label">Preferred Venue/Location</div>
            <div class="info-value">{{venue}}</div>
        </div>
        
        <div class="message-section">
            <span class="message-label">Client's Vision & Message:</span>
            <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #28a745;">
            <p style="margin: 0; color: #155724;">
                <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to begin crafting their extraordinary celebration.
            </p>
        </div>
    </div>
    
    <div class="footer">
        <p>This inquiry was submitted through the Silver Sutra website.</p>
        <p>© 2024 Silver Sutra Wedding Planning. All rights reserved.</p>
    </div>
</body>
</html>
```

---

## Template 2: Wedding Enquiry Form (WeddingVenues)

**Template Name:** Silver Sutra Wedding Venue Enquiry
**Template ID:** Use the ID provided by EmailJS

### Subject Line:
```
New Wedding Venue Enquiry from {{from_name}}
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Venue Enquiry</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #2c3e50;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .header {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
            margin-bottom: 0;
        }
        .header h1 {
            color: #eac88c;
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header p {
            color: #bdc3c7;
            margin: 10px 0 0 0;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }
        .info-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2c3e50;
        }
        .info-label {
            font-weight: bold;
            color: #2c3e50;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .info-value {
            color: #2c3e50;
            font-size: 16px;
        }
        .message-section {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .message-label {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
            display: block;
        }
        .venue-highlight {
            background: linear-gradient(135deg, #eac88c 0%, #f2dcb4 100%);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
        }
        .venue-highlight h3 {
            color: #2c3e50;
            margin: 0 0 10px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏰 Wedding Venue Enquiry</h1>
        <p>Silver Sutra Destination Weddings</p>
    </div>
    
    <div class="content">
        <p style="font-size: 18px; margin-bottom: 30px;">
            You have received a new wedding venue enquiry from <strong>{{from_name}}</strong>.
        </p>
        
        <div class="venue-highlight">
            <h3>🌟 New Venue Interest</h3>
            <p style="margin: 0; color: #2c3e50;">
                This client is interested in exploring our exclusive wedding venues and destination wedding options.
            </p>
        </div>
        
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">{{from_name}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">{{from_email}}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Mobile</div>
                <div class="info-value">{{mobile}}</div>
            </div>
        </div>
        
        <div class="message-section">
            <span class="message-label">Client's Message:</span>
            <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #28a745;">
            <p style="margin: 0; color: #155724;">
                <strong>Action Required:</strong> Please contact this client within 24 hours to discuss venue options and begin planning their destination wedding.
            </p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
                <strong>💡 Tip:</strong> Consider sharing our venue portfolio and availability calendar in your response.
            </p>
        </div>
    </div>
    
    <div class="footer">
        <p>This enquiry was submitted through the Silver Sutra Wedding Venues section.</p>
        <p>© 2024 Silver Sutra Wedding Planning. All rights reserved.</p>
    </div>
</body>
</html>
```

---

## How to Use These Templates:

1. **Go to EmailJS Dashboard** → Email Templates
2. **Click "Create New Template"**
3. **Copy the HTML code** from above
4. **Paste it into the template editor**
5. **Save the template**
6. **Note the Template ID** (you'll need this for the configuration)

## Template Variables Used:

### Contact Form Template:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{phone}}` - Phone number
- `{{event_date}}` - Event date
- `{{guest_count}}` - Guest count
- `{{budget}}` - Budget range
- `{{venue}}` - Preferred venue
- `{{message}}` - Client's message

### Wedding Enquiry Template:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{mobile}}` - Mobile number
- `{{message}}` - Client's message

## Features of These Templates:

✅ **Professional Design** - Matches your Silver Sutra brand
✅ **Responsive Layout** - Works on all devices
✅ **Clear Information Display** - Easy to read and scan
✅ **Call-to-Action** - Clear next steps for your team
✅ **Brand Colors** - Uses your champagne and charcoal color scheme
✅ **Professional Typography** - Georgia serif font for elegance

Once you create these templates in EmailJS, your forms will send beautifully formatted emails that match your luxury wedding planning brand! 