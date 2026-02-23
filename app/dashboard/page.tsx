import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function DashboardPage() {
    return (
        <div className="mobile-container pb-20">
            <Header>
                <div className="header-title-container">
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        Welcome back,
                    </p>
                    <h1>Mario 👋</h1>
                </div>
                <div className="header-icon">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#546E7A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </div>
            </Header>

            {/* Spacer */}
            <div style={{ height: "1rem" }}></div>

            {/* Dashboard Cards using Grid */}
            <div className="grid-2">
                {/* Scan Card */}
                <Link href="/scan/instructions" className="card stat-card no-underline">
                    <div className="card-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                    </div>
                    <h3 className="card-title">New Scan</h3>
                    <p className="card-desc">Check a mole</p>
                </Link>

                {/* History Card */}
                <Link href="/profile" className="card stat-card no-underline">
                    <div
                        className="card-icon"
                        style={{ backgroundColor: "#E8F5E9", color: "#4CAF50" }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </div>
                    <h3 className="card-title">My Checks</h3>
                    <p className="card-desc">Last: 2 mo. ago</p>
                </Link>

                {/* Dermatologist Card */}
                <Link href="/dermatologist/profile" className="card stat-card no-underline">
                    <div
                        className="card-icon"
                        style={{ backgroundColor: "#FFF3E0", color: "#FF9800" }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <h3 className="card-title">Dermatologist</h3>
                    <p className="card-desc">Dr. Rossi</p>
                </Link>

                {/* Records Card */}
                <Link href="/profile" className="card stat-card no-underline">
                    <div
                        className="card-icon"
                        style={{ backgroundColor: "#F3E5F5", color: "#9C27B0" }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>
                    <h3 className="card-title">Records</h3>
                    <p className="card-desc">Health data</p>
                </Link>
            </div>

            <div style={{ padding: "0 var(--spacing-md)", marginTop: "var(--spacing-lg)" }}>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "var(--success-green)",
                            }}
                        ></div>
                        <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>
                            Everything looks good!
                        </span>
                    </div>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
                        Jan 15
                    </span>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
