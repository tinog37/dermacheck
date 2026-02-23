"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ScanInstructionsPage() {
    const router = useRouter();

    return (
        <div className="mobile-container">
            <Header>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <svg
                        onClick={() => router.push("/dashboard")}
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
                    <h1>Mole Scan</h1>
                </div>
            </Header>

            <div
                style={{
                    padding: "0 var(--spacing-md)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <p className="text-secondary text-center mb-1">
                    Follow these steps for a clear scan
                </p>

                <svg viewBox="0 0 100 200" className="body-silhouette">
                    <path
                        d="M50 10 C60 10 65 18 65 25 C65 35 55 40 50 40 C45 40 35 35 35 25 C35 18 40 10 50 10"
                        fill="currentColor"
                    />
                    <path
                        d="M35 42 C25 45 15 50 15 70 L15 110 C15 115 20 120 25 120 L30 120 L30 180 C30 190 35 195 40 195 L45 195 L45 130 L55 130 L55 195 L60 195 C65 195 70 190 70 180 L70 120 L75 120 C80 120 85 115 85 110 L85 70 C85 50 75 45 65 42 L35 42"
                        fill="currentColor"
                    />
                    <circle cx="55" cy="55" r="4" className="mole-indicator" />
                </svg>

                <div className="instruction-list">
                    <div className="instruction-item">
                        <svg
                            className="instruction-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        <p>
                            Position the camera over the mole as indicated by your dermatologist.
                        </p>
                    </div>
                    <div className="instruction-item">
                        <svg
                            className="instruction-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                        <p>Ensure there is good lighting. Daylight avoids shadows.</p>
                    </div>
                    <div className="instruction-item">
                        <svg
                            className="instruction-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                        <p>Hold the camera steady to ensure image is in focus.</p>
                    </div>
                </div>

                <div style={{ marginTop: "auto", paddingBottom: "2rem" }}>
                    <Link href="/camera" className="btn btn-primary no-underline text-white w-full flex justify-center">
                        Start Camera
                    </Link>
                </div>
            </div>
        </div>
    );
}
