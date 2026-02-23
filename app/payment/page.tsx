"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
    const router = useRouter();
    const [selectedMethod, setSelectedMethod] = useState("nhs");

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
                    <h1>Payment</h1>
                </div>
            </Header>

            <div style={{ padding: "0 var(--spacing-md)", flex: 1 }}>
                <div className="payment-summary">
                    <div>
                        <h3 style={{ fontSize: "1rem" }}>Digital Mole Check</h3>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            Dr. Laura Bianchi
                        </p>
                    </div>
                    <div className="text-center">
                        <span className="price-tag">€15.00</span>
                        <p
                            style={{
                                fontSize: "0.7rem",
                                color: "var(--text-secondary)",
                                textDecoration: "line-through",
                            }}
                        >
                            €80.00
                        </p>
                    </div>
                </div>

                <h3 className="dashboard-section-title" style={{ padding: 0 }}>
                    Payment Method
                </h3>

                {/* Option 1: NHS */}
                <div
                    className={`payment-option ${selectedMethod === "nhs" ? "selected" : ""}`}
                    onClick={() => setSelectedMethod("nhs")}
                >
                    <div className="radio-circle"></div>
                    <div>
                        <h4 style={{ fontSize: "0.95rem" }}>National Health Service</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            Ticket
                        </p>
                    </div>
                    <div style={{ marginLeft: "auto", fontWeight: 600 }}>€15.00</div>
                </div>

                {/* Option 2: Insurance */}
                <div
                    className={`payment-option ${selectedMethod === "insurance" ? "selected" : ""}`}
                    onClick={() => setSelectedMethod("insurance")}
                >
                    <div className="radio-circle"></div>
                    <div>
                        <h4 style={{ fontSize: "0.95rem" }}>Health Insurance</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            Select provider
                        </p>
                    </div>
                </div>

                {/* Option 3: Card */}
                <div
                    className={`payment-option ${selectedMethod === "card" ? "selected" : ""}`}
                    onClick={() => setSelectedMethod("card")}
                >
                    <div className="radio-circle"></div>
                    <div>
                        <h4 style={{ fontSize: "0.95rem" }}>Credit Card</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            Add new card
                        </p>
                    </div>
                </div>

                <div
                    className="mt-2 text-center"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        color: "var(--text-secondary)",
                        fontSize: "0.8rem",
                    }}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Secure Payment • 256-bit SSL Encryption
                </div>
            </div>

            <div style={{ padding: "1rem 1.5rem" }}>
                <button
                    className="btn btn-primary"
                    onClick={() => router.push("/dashboard")}
                >
                    Confirm Payment €15.00
                </button>
            </div>
        </div>
    );
}
