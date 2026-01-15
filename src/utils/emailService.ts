import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  message: string;
}

/**
 * Send email using EmailJS with daily limit protection
 */
export async function sendEmail(
  data: EmailData,
  dailyLimit: number = 2
): Promise<{
  success: boolean;
  message: string;
  fallbackToWhatsApp?: boolean;
}> {
  // Validate environment variables
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS credentials not configured');
    return {
      success: false,
      message: 'Email service not configured. Please contact via WhatsApp.',
      fallbackToWhatsApp: true,
    };
  }

  try {
    // Add timestamp
    const emailData = {
      ...data,
      sent_at: new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
      }),
    };

    // Send email
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
      };
    }

    throw new Error('Failed to send email');
  } catch (error: any) {
    console.error('Email send error:', error);

    // Handle quota exceeded
    if (error.text?.includes('quota') || error.text?.includes('limit')) {
      return {
        success: false,
        message: 'Email quota exceeded. Please contact us via WhatsApp for immediate response.',
        fallbackToWhatsApp: true,
      };
    }

    // Handle specific errors
    if (error.text === 'The public key is invalid') {
      return {
        success: false,
        message: 'Email configuration error. Please contact via WhatsApp.',
        fallbackToWhatsApp: true,
      };
    }

    if (error.text === 'Service not found') {
      return {
        success: false,
        message: 'Email service not found. Please contact via WhatsApp.',
        fallbackToWhatsApp: true,
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again or contact via WhatsApp.',
      fallbackToWhatsApp: true,
    };
  }
}

export default { sendEmail };
