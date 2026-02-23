"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function AnalysisLoadingPage() {
    const router = useRouter();
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        async function runAnalysis() {
            const imageData = sessionStorage.getItem("capturedImage");

            if (!imageData) {
                // Fallback for direct access without camera
                setTimeout(() => router.push("/analysis/result"), 2000);
                return;
            }

            try {
                const response = await fetch("/api/analyze", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ image: imageData }),
                });

                const data = await response.json();
                console.log("Analysis result:", data);

                // Store result to show on next page
                sessionStorage.setItem("analysisResult", JSON.stringify(data));

                router.push("/analysis/result");
            } catch (err) {
                console.error("API Call failed", err);
                // Navigate anyway to show error or mock
                router.push("/analysis/result?error=true");
            }
        }

        runAnalysis();
    }, [router]);

    return (
        <div className="mobile-container">
            <div className="loading-content">
                <div className="spinner-container">
                    <div className="spinner"></div>
                    <div className="ai-icon">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                        </svg>
                    </div>
                </div>

                <h2 className="mb-1" style={{ color: "var(--primary-blue)" }}>
                    Analyzing image...
                </h2>
                <p className="text-secondary">
                    Artificial Intelligence is comparing the photo with previous scans.
                </p>
            </div>

            <div style={{ padding: "0 2rem" }}>
                <div className="info-box">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1976D2"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <p style={{ fontSize: "0.85rem", color: "#0D47A1" }}>
                        This is not a definitive medical diagnosis. A doctor will review
                        this image.
                    </p>
                </div>
            </div>
        </div>
    );
}
