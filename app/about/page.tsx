import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Kendra International",
  description:
    "Learn about Kendra International - strategic advisory firm specializing in finance, transformation, and M&A support.",
};

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            A strategic advisory firm specializing in M&A and business transformation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 text-slate-text/80 leading-relaxed">
                Kendra International partners with growth-focused SMEs to deliver
                CFO-level financial expertise, operational transformation, and
                strategic M&A advisory. We help businesses scale smarter through
                data-driven insights and hands-on execution support.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">What Sets Us Apart</h2>
              <p className="mt-4 text-slate-text/80 leading-relaxed">
                Our team combines deep industry expertise with a pragmatic,
                results-oriented approach. We deliver measurable outcomes in
                hours and days, not months, helping clients achieve fast growth
                milestones while building sustainable long-term value.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">Our Approach</h2>
              <p className="mt-4 text-slate-text/80 leading-relaxed">
                We believe in transparent partnerships built on trust. Whether
                {"you're"} looking to outsource your finance function, transform your
                operations, or pursue strategic acquisitions, we bring the
                expertise and speed needed to make it happen.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
