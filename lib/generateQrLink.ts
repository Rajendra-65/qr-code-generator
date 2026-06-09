import { QRType, QRFormData } from "@/types/qr";

export const generateQrLink = (
  type: QRType,
  data: QRFormData
) => {
  switch (type) {
    case "whatsapp":
      return `https://wa.me/${data.phone}?text=${encodeURIComponent(
        data.message
      )}`;

    case "instagram":
      return `https://instagram.com/${data.instagram}`;

    case "facebook":
      return data.facebook;

    case "google":
      return data.google;

    case "website":
      return data.website;

    default:
      return "";
  }
};