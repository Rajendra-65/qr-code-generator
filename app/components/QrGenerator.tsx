"use client";

import { useState } from "react";

import QrTypeSelector from "./QrTypeSelector";
import DynamicForm from "./DynamicForm";
import QRPreview from "./QrPreview";

import { QRType, QRFormData } from "@/types/qr";

import { generateQrLink } from "@/lib/generateQrLink";

import { toPng } from "html-to-image";

import { saveAs } from "file-saver";

export default function QrGenerator() {
  const [type, setType] =
    useState<QRType>("whatsapp");

  const [color, setColor] =
    useState("#000000");

  const [logo, setLogo] =
    useState<string | null>(null);

  const [data, setData] =
    useState<QRFormData>({
      phone: "",
      message: "",
      instagram: "",
      facebook: "",
      google: "",
      website: "",
    });

  const qrValue = generateQrLink(
    type,
    data
  );

  const downloadPNG = async () => {
    const node =
      document.getElementById("qr-preview");

    if (!node) return;

    const dataUrl =
      await toPng(node);

    saveAs(dataUrl, "qr-code.png");
  };

  const handleLogoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () =>
      setLogo(
        reader.result as string
      );

    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-10 grid md:grid-cols-2 gap-10">

      <div className="space-y-6">

        <QrTypeSelector
          value={type}
          onChange={setType}
        />

        <DynamicForm
          type={type}
          data={data}
          setData={setData}
        />

        <div>
          <label>
            QR Color
          </label>

          <input
            type="color"
            value={color}
            onChange={(e) =>
              setColor(
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label>
            Upload Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleLogoUpload
            }
          />
        </div>

        <button
          onClick={downloadPNG}
          className="bg-green-600 px-5 py-3 rounded"
        >
          Download PNG
        </button>

      </div>

      <div className="flex justify-center">

        <QRPreview
          value={qrValue}
          color={color}
          logo={logo}
        />

      </div>

    </div>
  );
}