export type QRType =
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "google"
  | "website";

export interface QRFormData {
  phone: string;
  message: string;

  instagram: string;

  facebook: string;

  google: string;

  website: string;
}