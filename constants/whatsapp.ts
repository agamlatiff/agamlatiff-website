
export const WHATSAPP_NUMBER = "6285922430828"; // Updated number

export const createWhatsAppLink = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const WA_LINKS = {
  general: createWhatsAppLink("Halo Mas Agam, saya ingin bertanya tentang jasa pembuatan sistem/website."),
  roi: createWhatsAppLink("Halo Mas Agam, saya sudah mencoba simulasi kerugian di website Anda dan tertarik untuk mengamankan profit bisnis saya. Bisa kita diskusi lebih lanjut?"),
  process: createWhatsAppLink("Halo Mas Agam, saya ingin memulai konsultasi gratis sekarang."),
  pricing: (planName: string) => createWhatsAppLink(`Halo Mas Agam, saya tertarik dengan ${planName}. Bisa tolong jelaskan lebih detail?`),
};
