import type { Metadata } from "next";
import { pageMeta } from "@/config/site";

export const metadata: Metadata = pageMeta.contact as Metadata;

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4a6a8a 0%, #8096af 50%, #a3b8cc 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-white/90">
            {"Let's start building your success story."}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <form className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                placeholder="First Name"
                required
              />
              <input
                className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
              placeholder="Email"
              type="email"
              required
            />
            <input
              className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
              placeholder="Company"
            />
            <textarea
              className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors resize-none"
              placeholder="Message"
              rows={5}
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
