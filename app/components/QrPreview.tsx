"use client";

import { QRCodeCanvas } from "qrcode.react";

interface Props {
  value: string;
  color: string;
  logo?: string | null;
}

export default function QRPreview({
  value,
  color,
  logo,
}: Props) {
  return (
    <div
      id="qr-preview"
      className="bg-white p-5 rounded-xl"
    >
      <QRCodeCanvas
        value={value}
        size={300}
        fgColor={color}
        imageSettings={
          logo
            ? {
                src: logo,
                x: undefined,
                y: undefined,
                height: 50,
                width: 50,
                excavate: true,
              }
            : undefined
        }
      />
    </div>
  );
}