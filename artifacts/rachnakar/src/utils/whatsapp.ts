const WHATSAPP_NUMBER = "919876543210";

export interface InquiryData {
  productName: string;
  category: string;
  material: string;
  dimensions: string;
  productUrl: string;
}

export function openWhatsAppInquiry(data: InquiryData): void {
  const lines = [
    "*PRODUCT INQUIRY — Rachnakar Design Studio*",
    "",
    "*Product:* " + data.productName,
    "*Category:* " + data.category,
    "*Material:* " + data.material,
    "*Dimensions:* " + data.dimensions,
    "",
    "*Product Page:*",
    data.productUrl,
    "",
    "Please share pricing, lead time, and customization options.",
    "",
    "_Sent via Rachnakar Design Studio Website_",
  ];
  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encoded, "_blank", "noopener,noreferrer");
}
