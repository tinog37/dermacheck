"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function TrackingPage() {
    const router = useRouter();

    return (
        <div className="mobile-container flex flex-col h-screen">
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
                    <h1>Checkup Status</h1>
                </div>
            </Header>

            <div style={{ padding: "0 var(--spacing-md)", flex: 1, overflowY: "auto" }}>
                {/* Status Card */}
                <div
                    className="card mb-2"
                    style={{
                        padding: "1.25rem",
                        marginBottom: "2rem"
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    background: "#E3F2FD",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#2196F3"
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="card-title" style={{ color: "#2196F3", marginBottom: "0.25rem" }}>Waiting for Doctor</h3>
                                <p className="card-desc">ID: #8392-192</p>
                            </div>
                        </div>
                        <span style={{
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "#2196F3"
                        }}>
                            In Progress
                        </span>
                    </div>
                    <div style={{ paddingLeft: "calc(50px + 1rem)" }}>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                            Estimated response by <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>Jan 16, 2026</span>
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div style={{ position: "relative", marginLeft: "0.5rem" }}>
                    {/* Continuous vertical line */}
                    <div style={{
                        position: "absolute",
                        left: "19px",
                        top: "10px",
                        bottom: "30px",
                        width: "2px",
                        backgroundColor: "#E0E0E0",
                        zIndex: 0
                    }}></div>

                    {/* Step 1: Completed */}
                    <div style={{ display: "flex", gap: "1.25rem", paddingBottom: "2rem", position: "relative" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            flexShrink: 0,
                            background: "white",
                            zIndex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#4CAF50" }}></div>
                        </div>
                        <div style={{ paddingTop: "0.25rem" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: "500", color: "#2196F3" }}>Scan Completed</h4>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Jan 15, 2026 • 14:30</p>
                        </div>
                    </div>

                    {/* Step 2: Completed */}
                    <div style={{ display: "flex", gap: "1.25rem", paddingBottom: "2rem", position: "relative" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            flexShrink: 0,
                            background: "white",
                            zIndex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#4CAF50" }}></div>
                        </div>
                        <div style={{ paddingTop: "0.25rem" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: "500", color: "#2196F3" }}>AI Analysis Done</h4>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Jan 15, 2026 • 14:32</p>
                            <div style={{
                                marginTop: "0.5rem",
                                fontSize: "0.75rem",
                                background: "#E8F5E9",
                                color: "#2E7D32",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "4px",
                                width: "fit-content",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.25rem"
                            }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Low Risk Detected
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Current */}
                    <div style={{ display: "flex", gap: "1.25rem", paddingBottom: "2rem", position: "relative" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            flexShrink: 0,
                            background: "white",
                            zIndex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <div style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#2196F3",
                                boxShadow: "0 0 0 4px #BBDEFB"
                            }}></div>
                        </div>
                        <div style={{ paddingTop: "0.25rem" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#2196F3" }}>Doctor Evaluation</h4>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Pending review by Dr. Mario Rossi...</p>
                        </div>
                    </div>

                    {/* Step 4: Future */}
                    <div style={{ display: "flex", gap: "1.25rem", position: "relative" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            flexShrink: 0,
                            background: "white",
                            zIndex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E0E0E0" }}></div>
                        </div>
                        <div style={{ paddingTop: "0.25rem" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: "500", color: "#90A4AE" }}>Final Result</h4>
                            <p style={{ fontSize: "0.85rem", color: "#90A4AE", marginTop: "0.25rem" }}>Usually takes 24-48h</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "1.5rem" }}>
                <button
                    className="btn btn-primary"
                    onClick={() => router.push("/dashboard")}
                >
                    Notify me when ready
                </button>
            </div>
        </div>
    );
}
