"use client";

import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FindDermatologistPage() {
    const router = useRouter();

    return (
        <div className="mobile-container pb-20 bg-white">
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
                    <h1>Find Dermatologist</h1>
                </div>
            </Header>

            <div style={{ padding: "1rem" }}>
                {/* Search Bar */}
                <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{
                            position: "absolute",
                            left: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "#9E9E9E"
                        }}
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Zip code or city"
                        style={{
                            width: "100%",
                            padding: "0.75rem 1rem 0.75rem 2.5rem",
                            borderRadius: "12px",
                            border: "1px solid #E0E0E0",
                            fontSize: "1rem",
                            backgroundColor: "#F5F7FA",
                            outline: "none"
                        }}
                    />
                    <button style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#2196F3"
                    }}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </button>
                </div>

                {/* Filters */}
                <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "1rem" }} className="no-scrollbar">
                    <span
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "20px",
                            background: "#E3F2FD",
                            color: "#2196F3",
                            fontSize: "0.85rem",
                            fontWeight: "500",
                            whiteSpace: "nowrap"
                        }}
                    >
                        All
                    </span>
                    <span style={{ padding: "0.5rem 1rem", borderRadius: "20px", border: "1px solid #E0E0E0", color: "#546E7A", fontSize: "0.85rem", whiteSpace: "nowrap" }}>National Health</span>
                    <span style={{ padding: "0.5rem 1rem", borderRadius: "20px", border: "1px solid #E0E0E0", color: "#546E7A", fontSize: "0.85rem", whiteSpace: "nowrap" }}>Insurance</span>
                    <span style={{ padding: "0.5rem 1rem", borderRadius: "20px", border: "1px solid #E0E0E0", color: "#546E7A", fontSize: "0.85rem", whiteSpace: "nowrap" }}>Available Today</span>
                </div>

                <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "1rem" }}>
                    3 Results near you
                </p>

                {/* Doctor 1 */}
                <Link href="/dermatologist/profile" className="no-underline">
                    <div className="card mb-2" style={{ padding: "1rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "80px",
                                background: "#FFCCBC",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#D84315",
                                fontWeight: "600",
                                flexShrink: 0
                            }}
                        >
                            LB
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                    <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#1A233A", marginBottom: "0.25rem" }}>
                                        Dr. Laura Bianchi
                                    </h3>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#546E7A", marginBottom: "0.25rem" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <span style={{ color: "#FFC107", marginRight: "2px" }}>★</span> 4.8 (127)
                                        </div>
                                        <span style={{ color: "#E0E0E0" }}>|</span>
                                        <span>Derm. Oncology</span>
                                    </div>
                                    <p style={{ fontSize: "0.8rem", color: "#90A4AE", marginBottom: "0.5rem" }}>
                                        2.5 km away • 15 years exp.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                                <span style={{
                                    fontSize: "0.75rem",
                                    padding: "2px 8px",
                                    borderRadius: "4px",
                                    background: "#E8F5E9",
                                    color: "#2E7D32",
                                    fontWeight: "500"
                                }}>
                                    National Health Service
                                </span>
                            </div>
                            <p style={{ fontSize: "0.75rem", color: "#4CAF50", marginTop: "0.5rem", fontWeight: "500" }}>
                                Next slot: Jan 20
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Doctor 2 */}
                <div className="card mb-2" style={{ padding: "1rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div
                        style={{
                            width: "60px",
                            height: "80px",
                            background: "#C5CAE9",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#283593",
                            fontWeight: "600",
                            flexShrink: 0
                        }}
                    >
                        MV
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div>
                                <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#1A233A", marginBottom: "0.25rem" }}>
                                    Dr. Marco Verdi
                                </h3>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#546E7A", marginBottom: "0.25rem" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ color: "#FFC107", marginRight: "2px" }}>★</span> 4.9 (84)
                                    </div>
                                    <span style={{ color: "#E0E0E0" }}>|</span>
                                    <span>General Derm.</span>
                                </div>
                                <p style={{ fontSize: "0.8rem", color: "#90A4AE", marginBottom: "0.5rem" }}>
                                    4.0 km away • 10 years exp.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                            <span style={{
                                fontSize: "0.75rem",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                background: "#FFF3E0",
                                color: "#E65100",
                                fontWeight: "500"
                            }}>
                                Private Only
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
}
