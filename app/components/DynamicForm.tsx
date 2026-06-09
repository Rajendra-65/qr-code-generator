"use client";

import { QRType, QRFormData } from "@/types/qr";

interface Props {
  type: QRType;
  data: QRFormData;
  setData: React.Dispatch<
    React.SetStateAction<QRFormData>
  >;
}

export default function DynamicForm({
  type,
  data,
  setData,
}: Props) {
  const update = (
    key: keyof QRFormData,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  switch (type) {
    case "whatsapp":
      return (
        <div className="space-y-3">
          <input
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-slate-800"
            value={data.phone}
            onChange={(e) =>
              update("phone", e.target.value)
            }
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 rounded bg-slate-800"
            value={data.message}
            onChange={(e) =>
              update("message", e.target.value)
            }
          />
        </div>
      );

    case "instagram":
      return (
        <input
          placeholder="Instagram Username"
          className="w-full p-3 rounded bg-slate-800"
          value={data.instagram}
          onChange={(e) =>
            update("instagram", e.target.value)
          }
        />
      );

    case "facebook":
      return (
        <input
          placeholder="Facebook URL"
          className="w-full p-3 rounded bg-slate-800"
          value={data.facebook}
          onChange={(e) =>
            update("facebook", e.target.value)
          }
        />
      );

    case "google":
      return (
        <input
          placeholder="Google Review Link"
          className="w-full p-3 rounded bg-slate-800"
          value={data.google}
          onChange={(e) =>
            update("google", e.target.value)
          }
        />
      );

    case "website":
      return (
        <input
          placeholder="Website URL"
          className="w-full p-3 rounded bg-slate-800"
          value={data.website}
          onChange={(e) =>
            update("website", e.target.value)
          }
        />
      );

    default:
      return null;
  }
}