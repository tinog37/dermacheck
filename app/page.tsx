import Link from "next/link";

export default function Home() {
  return (
    <main className="mobile-container flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-12 pb-8 px-6 text-center bg-gradient-to-b from-[var(--primary-blue-light)] to-white rounded-b-[3rem]">
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <circle
              cx="40"
              cy="40"
              r="38"
              stroke="#2196F3"
              strokeWidth="4"
              strokeOpacity="0.2"
              fill="white"
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
        </div>

        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
          DermaCheck
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-xs mx-auto leading-relaxed">
          Smart mole monitoring, directly connected to your dermatologist.
        </p>
      </section>

      {/* Instructions Section */}
      <section className="flex-1 px-6 py-8">
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
          How it Works
        </h2>

        <div className="flex flex-col gap-8">
          {/* Step 1 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[var(--primary-blue-light)] text-[var(--primary-blue)] flex items-center justify-center shrink-0 font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] text-lg mb-1">
                Scan Your Skin
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Use our AI-powered camera to take a clear photo of any mole or skin spot you're concerned about.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[var(--primary-blue-light)] text-[var(--primary-blue)] flex items-center justify-center shrink-0 font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] text-lg mb-1">
                Instant Analysis
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Get immediate preliminary feedback on risk levels based on color, shape, and size.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[var(--primary-blue-light)] text-[var(--primary-blue)] flex items-center justify-center shrink-0 font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] text-lg mb-1">
                Doctor Review
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Send results to your dermatologist for a professional opinion and track changes over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="p-6 pb-8 mt-auto bg-white border-t border-[var(--border-light)]">
        <Link href="/login" className="btn btn-primary w-full justify-center text-center no-underline text-lg py-4 shadow-lg shadow-blue-200">
          Launch Live Demo
        </Link>
        <p className="text-center text-xs text-[var(--text-light)] mt-4">
          MVP Demo Version 0.1.0 • For testing purposes only
        </p>
      </div>
    </main>
  );
}
