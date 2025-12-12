
export const WHATSAPP_NUMBER = "6285922430828"; // Updated number

export const createWhatsAppLink = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};


