import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_z5l2dbw', // Replace with your EmailJS service ID
    TEMPLATE_ID: 'template_90p7s5p', // Replace with your EmailJS template ID
    PUBLIC_KEY: 'aqQVeIvy4miILu7Qq', // Replace with your EmailJS public key
};

// Initialize EmailJS
export const initEmailJS = () => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (templateParams: any) => {
    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        return { success: true, data: response };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return { success: false, error };
    }
};

// Contact form email template
export const sendContactFormEmail = async (formData: {
    name: string;
    email: string;
    phone: string;
    eventDate: string;
    guestCount: string;
    budget: string;
    venue: string;
    message: string;
}) => {
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        event_date: formData.eventDate,
        guest_count: formData.guestCount,
        budget: formData.budget,
        venue: formData.venue,
        message: formData.message,
        to_name: 'Silver Sutra Team',
    };

    return await sendEmail(templateParams);
};

// Wedding enquiry form email template
export const sendWeddingEnquiryEmail = async (formData: {
    name: string;
    email: string;
    mobile: string;
    message: string;
}) => {
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        to_name: 'Silver Sutra Team',
    };

    return await sendEmail(templateParams);
}; 