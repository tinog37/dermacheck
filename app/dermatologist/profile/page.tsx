"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DermatologistProfilePage() {
    const router = useRouter();

    return (
        <div className="mobile-container flex flex-col h-screen bg-white">
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
                    <h1>Doctor Profile</h1>
                </div>
            </Header>

            <div style={{ flex: 1, overflowY: "auto", padding: "0 1.5rem" }}>

                {/* Profile Header */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1rem", marginBottom: "2rem" }}>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            background: "#FFCCBC",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2.5rem",
                            fontWeight: "600",
                            color: "#D84315",
                            marginBottom: "1rem"
                        }}
                    >
                        LB
                    </div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1A233A", marginBottom: "0.25rem" }}>Dr. Laura Bianchi</h2>
                    <p style={{ fontSize: "0.95rem", color: "#546E7A" }}>Certified Dermatologist</p>

                    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                        <span style={{
                            fontSize: "0.75rem",
                            padding: "4px 12px",
                            borderRadius: "20px",
                            background: "#E3F2FD",
                            color: "#2196F3",
                            fontWeight: "500"
                        }}>
                            Derm. Oncology
                        </span>
                        <span style={{
                            fontSize: "0.75rem",
                            padding: "4px 12px",
                            borderRadius: "20px",
                            background: "#E8F5E9",
                            color: "#2E7D32",
                            fontWeight: "500"
                        }}>
                            NHS Affiliated
                        </span>
                    </div>
                </div>

                <div className="card mb-2" style={{ padding: "1.5rem" }}>
                    {/* Specialization */}
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "#E3F2FD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#2196F3",
                            flexShrink: 0
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "0.95rem", fontWeight: "600", color: "#1A233A", marginBottom: "0.25rem" }}>
                                Specialization
                            </h4>
                            <p style={{ fontSize: "0.9rem", color: "#546E7A", lineHeight: "1.4" }}>
                                Oncological Dermatology, Surgical Dermatology
                            </p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "#E3F2FD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#2196F3",
                            flexShrink: 0
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "0.95rem", fontWeight: "600", color: "#1A233A", marginBottom: "0.25rem" }}>
                                Experience
                            </h4>
                            <p style={{ fontSize: "0.9rem", color: "#546E7A" }}>
                                15 Years
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "#E3F2FD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#2196F3",
                            flexShrink: 0
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: "0.95rem", fontWeight: "600", color: "#1A233A", marginBottom: "0.25rem" }}>
                                Studio
                            </h4>
                            <p style={{ fontSize: "0.9rem", color: "#546E7A", marginBottom: "0.75rem" }}>
                                Via Roma 123, Milan
                            </p>
                            <div style={{
                                width: "100%",
                                height: "120px",
                                background: "#F5F5F5",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#BDBDBD",
                                fontSize: "0.85rem"
                            }}>
                                Map View
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#1A233A", marginBottom: "1rem", paddingLeft: "0.5rem" }}>
                        Accepted Payments
                    </h4>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 1rem",
                            background: "white",
                            borderRadius: "12px",
                            border: "1px solid #E0E0E0",
                            color: "#546E7A",
                            fontSize: "0.9rem"
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            NHS Ticket (€15.00)
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 1rem",
                            background: "white",
                            borderRadius: "12px",
                            border: "1px solid #E0E0E0",
                            color: "#546E7A",
                            fontSize: "0.9rem"
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Insurance
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    padding: "1rem 1.5rem",
                    background: "white",
                    borderTop: "1px solid #F5F7FA",
                }}
            >
                <Link href="/payment" className="btn btn-primary mb-2 no-underline text-white w-full flex justify-center">
                    Connect as my Dermatologist
                </Link>
                <button className="btn btn-secondary w-full">Book Visit</button>
            </div>
        </div>
    );
}
