import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="mobile-container justify-center">
            <div className="login-header">
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="login-illustration"
                >
                    <circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="#2196F3"
                        strokeWidth="4"
                        strokeOpacity="0.2"
                    />
                    <path
                        d="M40 15C26.1929 15 15 26.1929 15 40C15 53.8071 26.1929 65 40 65C53.8071 65 65 53.8071 65 40"
                        stroke="#2196F3"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <circle cx="40" cy="40" r="18" fill="#E3F2FD" />
                    <circle cx="44" cy="36" r="3" fill="#2196F3" />
                    <circle
                        cx="38"
                        cy="42"
                        r="1.5"
                        fill="#2196F3"
                        fillOpacity="0.6"
                    />
                    <path
                        d="M52 52L62 62"
                        stroke="#2196F3"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
                <h1 style={{ fontSize: "1.75rem", color: "var(--text-primary)" }}>
                    Login to DermaCheck
                </h1>
                <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                    Access your secure medical dashboard
                </p>
            </div>

            <div className="login-options">
                <Link
                    href="/dashboard"
                    className="btn btn-primary no-underline text-white"
                    style={{ height: "56px" }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                        <path d="M12 16V12M12 8H12.01" />
                    </svg>
                    Log in with SPID / CIE
                </Link>

                <Link
                    href="/dashboard"
                    className="btn btn-secondary no-underline text-[var(--text-secondary)]"
                >
                    Demo Access
                </Link>
            </div>

            <div className="secure-badge">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                    Your data is encrypted and accessible only to you and your doctor
                </span>
            </div>
        </div>
    );
}
