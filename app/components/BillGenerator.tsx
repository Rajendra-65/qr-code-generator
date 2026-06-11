"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function BillGenerator() {
    const [shopName, setShopName] = useState("");

    const [google, setGoogle] = useState(true);
    const [instagram, setInstagram] = useState(false);
    const [facebook, setFacebook] = useState(false);

    const generateInvoice = () => {
        if (!shopName.trim()) {
            alert("Please enter shop name");
            return;
        }

        let description = "";
        let total = 0;

        if (google && !instagram && !facebook) {
            description = "Google Review QR Stand";
            total = 500;
        } else if (google && instagram && !facebook) {
            description = "Google Review + Instagram QR Stand";
            total = 600;
        } else if (google && instagram && facebook) {
            description = "Google + Instagram + Facebook QR Stand";
            total = 650;
        } else {
            alert(
                "Please select valid combinations.\nGoogle Review is mandatory."
            );
            return;
        }

        const invoiceNo = `INV-${Date.now()}`;

        const doc = new jsPDF();

        // Header
        doc.setFontSize(20);
        doc.text("RAJ QR SOLUTIONS", 14, 20);

        doc.setFontSize(12);

        doc.text(`Invoice No : ${invoiceNo}`, 14, 35);

        doc.text(
            `Date : ${new Date().toLocaleDateString()}`,
            14,
            45
        );

        doc.text(`Shop Name : ${shopName}`, 14, 55);

        // Table
        autoTable(doc, {
            startY: 70,
            head: [["Description", "Qty", "Amount"]],
            body: [
                [description, "1", `₹${total}`],
            ],
            theme: "grid",
            styles: {
                halign: "center",
            },
            headStyles: {
                fillColor: [41, 128, 185],
            },
        });

        const finalY =
            doc.internal.pageSize.height - 60;

        // Total
        doc.setFontSize(14);

        doc.text(
            `Grand Total : ₹${total}`,
            14,
            finalY + 20
        );

        // Footer
        doc.setFontSize(11);

        doc.text(
            "Thank you for your business!",
            14,
            finalY + 40
        );

        doc.save(`${shopName}-Invoice.pdf`);
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">

            <h1 className="text-3xl font-bold text-center">
                Invoice Generator
            </h1>

            {/* Shop Name */}
            <div>
                <label className="font-medium">
                    Shop Name
                </label>

                <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    placeholder="Silver Streak Restaurant"
                    className="w-full border rounded-lg p-3 mt-2"
                />
            </div>

            {/* Deliverables */}
            <div className="space-y-4">

                <h2 className="text-xl font-semibold">
                    Select Deliverables
                </h2>

                <label className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                        checked={google}
                        onChange={(e) => setGoogle(e.target.checked)}
                    />

                    Google Review QR
                </label>

                <label className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                        checked={instagram}
                        onChange={(e) => setInstagram(e.target.checked)}
                    />

                    Instagram QR
                </label>

                <label className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                        checked={facebook}
                        onChange={(e) => setFacebook(e.target.checked)}
                    />

                    Facebook QR
                </label>

            </div>

            {/* Price Preview */}
            <div className="bg-slate-100 p-4 rounded-lg">

                <h3 className="font-bold text-lg mb-3">
                    Price
                </h3>

                {google && !instagram && !facebook && (
                    <p>₹500</p>
                )}

                {google && instagram && !facebook && (
                    <p>₹600</p>
                )}

                {google && instagram && facebook && (
                    <p>₹650</p>
                )}

            </div>

            {/* Generate Button */}
            <button
                onClick={generateInvoice}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
                Download Invoice PDF
            </button>

        </div>
    );
}