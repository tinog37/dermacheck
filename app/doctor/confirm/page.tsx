"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DoctorConfirmPage() {
    const router = useRouter();

    return (
        <div className="mobile-container flex flex-col h-screen">
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
                    <h1>Send to Doctor</h1>
                </div>
            </Header>

            <div style={{ padding: "0 var(--spacing-md)", flex: 1 }}>
                {/* Doctor Profile Summary */}
                <div
                    className="card mb-2"
                    style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <div
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background: "#E0E0E0",
                            overflow: "hidden",
                        }}
                    >
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#9E9E9E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="card-title">Dr. Mario Rossi</h3>
                        <p className="card-desc">Dermatologist</p>
                    </div>
                </div>

                <h3 className="dashboard-section-title" style={{ padding: 0 }}>
                    Documents Included
                </h3>
                <div className="card mb-2">
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4CAF50"
                                strokeWidth="2"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Current Mole Photo</span>
                        </div>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4CAF50"
                                strokeWidth="2"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>History (3 previous scans)</span>
                        </div>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4CAF50"
                                strokeWidth="2"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>AI Analysis Result</span>
                        </div>
                    </div>
                </div>

                <div
                    className="card"
                    style={{
                        backgroundColor: "#E3F2FD",
                        border: "none",
                        boxShadow: "none",
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.9rem",
                            color: "#0D47A1",
                            marginBottom: "0.5rem",
                        }}
                    >
                        <strong>Process:</strong> The doctor will confirm the checkup or
                        request an in-person visit.
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "#1976D2" }}>
                        Response time: within 48 hours
                    </p>
                </div>
            </div>

            <div style={{ padding: "1rem 1.5rem" }}>
                <Link
                    href="/tracking"
                    className="btn btn-primary mb-1 no-underline text-white w-full flex justify-center"
                >
                    Confirm & Send
                </Link>
                <Link
                    href="/analysis/result"
                    className="btn btn-secondary no-underline text-[var(--text-secondary)] w-full flex justify-center"
                >
                    Cancel
                </Link>
            </div>
        </div>
    );
}
