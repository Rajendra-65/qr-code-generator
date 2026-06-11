import BillGenerator from "./components/BillGenerator";
import QrGenerator from "./components/QrGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-10">

        <h1 className="text-4xl md:text-6xl font-bold text-center">
          QR Code Generator
        </h1>

        <p className="text-center text-gray-400 mt-4">
          Generate WhatsApp, Instagram, Facebook,
          Google Review and Website QR Codes
        </p>
        <BillGenerator/>
        <QrGenerator />

      </div>
    </main>
  );
}