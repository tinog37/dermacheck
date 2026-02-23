"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AnalysisResultPage() {
    const router = useRouter();
    const [imageSrc, setImageSrc] = useState<string>("");
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        // Retrieve image and result from session storage
        const storedImage = sessionStorage.getItem("capturedImage");
        const storedResult = sessionStorage.getItem("analysisResult");

        if (storedImage) setImageSrc(storedImage);
        if (storedResult) {
            try {
                setResult(JSON.parse(storedResult));
            } catch (e) {
                console.error("Error parsing result", e);
            }
        }
    }, []);

    return (
        <div className="mobile-container flex flex-col min-h-screen">
            <Header>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <svg
                        onClick={() => router.back()}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ cursor: "pointer" }}
                    >
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    <h1>Result</h1>
                </div>
            </Header>

            <div className="result-image-container">
                {imageSrc ? (
                    <img src={imageSrc} alt="Scanned Mole" className="result-image" />
                ) : (
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 400 200"
                        preserveAspectRatio="none"
                    >
                        <rect width="100%" height="100%" fill="#E0E0E0" />
                        <path
                            d="M150 100 C 180 80, 220 80, 250 100"
                            stroke="#BDBDBD"
                            strokeWidth="4"
                            fill="none"
                        />
                        <circle cx="200" cy="100" r="20" fill="#8D6E63" />
                    </svg>
                )}
            </div>

            <div className="result-card">
                <div className="status-icon status-green">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <h2 className="mb-1">
                    {result?.risk_level === "high" ? "Consultation Advised" : "No significant changes"}
                </h2>
                <p className="text-secondary">
                    {result?.message || "The analysis shows consistency with previous scans."}
                </p>

                {result?.model_info && (
                    <p className="text-xs text-blue-500 mt-2 p-2 bg-blue-50 rounded">
                        Connected to: {result.model_info}
                    </p>
                )}

                <div className="result-info-box">
                    <strong>Next Step:</strong>
                    <p className="mt-1">
                        The result will be sent to your dermatologist for final evaluation.
                    </p>
                </div>
            </div>

            <div style={{ padding: "1rem 1.5rem", marginTop: "auto" }}>
                <Link
                    href="/doctor/confirm"
                    className="btn btn-primary mb-1 no-underline text-white w-full flex justify-center"
                >
                    Send to Doctor
                </Link>
                <Link
                    href="/dashboard"
                    className="btn btn-secondary no-underline text-[var(--text-secondary)] w-full flex justify-center"
                >
                    Save to Drafts
                </Link>
            </div>
        </div>
    );
}
