"use client";

import { QRType } from "@/types/qr";

interface Props {
  value: QRType;
  onChange: (type: QRType) => void;
}

const types: QRType[] = [
  "whatsapp",
  "instagram",
  "facebook",
  "google",
  "website",
];

export default function QrTypeSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`p-3 rounded-xl border transition ${
            value === type
              ? "bg-blue-600 border-blue-600"
              : "bg-slate-900 border-slate-700"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}