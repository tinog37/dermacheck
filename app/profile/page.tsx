"use client";

import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
    const router = useRouter();

    return (
        <div className="mobile-container flex flex-col min-h-screen bg-white font-sans relative">
            {/* HEADER (Blue Section) */}
            <div style={{
                width: "100%",
                height: "340px",
                background: "#2196F3",
                paddingTop: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
                borderBottomLeftRadius: "40px",
                borderBottomRightRadius: "40px",
                boxShadow: "0 4px 20px rgba(33, 150, 243, 0.3)",
                marginBottom: "2rem",
                position: "relative",
                zIndex: 10
            }}>
                {/* Avatar */}
                <div style={{
                    width: "100px",
                    height: "100px",
                    background: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}>
                    <span style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2196F3" }}>M</span>
                </div>

                {/* Name & CF */}
                <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "white", marginBottom: "0.25rem" }}>
                    Mario Rossi
                </h2>
                <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.9)", marginBottom: "1.5rem" }}>
                    RSSMRA80A01H501X
                </p>

                {/* SPID Badge */}
                <div style={{
                    padding: "0.5rem 1.5rem",
                    background: "#E3F2FD",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2196F3"
                        strokeWidth="2"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span style={{ fontSize: "0.9rem", color: "#2196F3", fontWeight: "500" }}>Connected via SPID</span>
                </div>
            </div>

            {/* LIST SECTION */}
            <div style={{ flex: 1, padding: "0 1.5rem", paddingBottom: "100px" }}>
                {/* Item 1 */}
                <div style={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #F5F5F5",
                    cursor: "pointer"
                }} onClick={() => router.push("/tracking")}>
                    <div style={{ marginRight: "1rem", color: "#757575" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1A233A" }}>Checkup History</h4>
                        <p style={{ fontSize: "0.9rem", color: "#90A4AE", marginTop: "0.25rem" }}>5 scans in last 12 months</p>
                    </div>
                    <div style={{ color: "#E0E0E0" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </div>

                {/* Item 2 */}
                <Link href="/dermatologist/profile" className="no-underline" style={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #F5F5F5"
                }}>
                    <div style={{ marginRight: "1rem", color: "#757575" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1A233A" }}>My Dermatologist</h4>
                        <p style={{ fontSize: "0.9rem", color: "#90A4AE", marginTop: "0.25rem" }}>Dr. Laura Bianchi</p>
                    </div>
                    <div style={{ color: "#E0E0E0" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </Link>

                {/* Item 3 */}
                <div style={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #F5F5F5",
                    cursor: "pointer"
                }}>
                    <div style={{ marginRight: "1rem", color: "#757575" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <polyline points="13 2 13 9 20 9" />
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1A233A" }}>Medical Documents</h4>
                        <p style={{ fontSize: "0.9rem", color: "#90A4AE", marginTop: "0.25rem" }}>Electronic Health Record</p>
                    </div>
                    <div style={{ color: "#E0E0E0" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </div>

                {/* Item 4 */}
                <div style={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #F5F5F5",
                    cursor: "pointer"
                }}>
                    <div style={{ marginRight: "1rem", color: "#757575" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1A233A" }}>Settings</h4>
                    </div>
                    <div style={{ color: "#E0E0E0" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </div>

                {/* LOG OUT BUTTON */}
                <div style={{ marginTop: "2rem" }}>
                    <button
                        onClick={() => router.push("/")}
                        style={{
                            width: "100%",
                            padding: "1rem",
                            background: "#F5F5F5",
                            borderRadius: "12px",
                            border: "none",
                            color: "#D32F2F",
                            fontWeight: "700",
                            fontSize: "1rem",
                            cursor: "pointer"
                        }}
                    >
                        Log Out
                    </button>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
