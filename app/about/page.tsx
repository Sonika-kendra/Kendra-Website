import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Users, Target, Zap } from "lucide-react";
import { aboutMeta } from "@content/about";

export const metadata: Metadata = aboutMeta;

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            About Kendra International
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Partnering with growth-focused SMEs to deliver strategic advisory, operational transformation, and M&A support.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy">Our Story</h2>
            <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">
              Founded by experienced CFOs and M&amp;A advisors who saw an opportunity to bring enterprise-level advisory to growth-stage SMEs
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-text/80 leading-relaxed">
              Kendra International emerged from a simple insight: high-quality strategic advisory and operational transformation shouldn&apos;t be 
              exclusively reserved for large enterprises. Growing SMEs often struggle with the same challenges—finance function optimization, 
              cost control, and strategic acquisitions—but lack access to world-class advisory at the right price point.
            </p>
            
            <p className="text-slate-text/80 leading-relaxed mt-4">
              We founded Kendra to bridge that gap. With deep expertise in financial advisory, operational transformation, and M&A, we deliver 
              measurable results in weeks, not months. Our track record spans across sectors—from SaaS and manufacturing to financial services—
              consistently helping our clients increase valuations, reduce costs, and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy">Our Core Values</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-lg mb-4">
                <Target className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-navy">Focus on Results</h3>
              <p className="mt-2 text-sm text-slate-text/70">Every recommendation is measured by impact on your bottom line</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-navy">Speed & Efficiency</h3>
              <p className="mt-2 text-sm text-slate-text/70">Rapid deployment with proven methodologies that deliver fast outcomes</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-lg mb-4">
                <Users className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-navy">Partnership Mindset</h3>
              <p className="mt-2 text-sm text-slate-text/70">We succeed when you succeed—aligned incentives, shared goals</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-lg mb-4">
                <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-navy">Transparency</h3>
              <p className="mt-2 text-sm text-slate-text/70">Clear communication, honest assessments, no hidden agendas</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy">What Sets Us Apart</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20">
                  <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy text-lg">Deep Industry Expertise</h3>
                <p className="mt-1 text-slate-text/70">Our team has worked with 50+ high-growth companies across sectors, giving us insights that drives faster, smarter decisions</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20">
                  <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy text-lg">Rapid Execution</h3>
                <p className="mt-1 text-slate-text/70">We deliver results in days or weeks, not months. Our streamlined processes ensure initiatives move at startup speed</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20">
                  <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy text-lg">Hands-On Support</h3>
                <p className="mt-1 text-slate-text/70">We don&apos;t just advise—we roll up our sleeves and help you execute changes, train teams, and embed new processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-off-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-slate-text/70">
            Let&apos;s discuss how we can help you scale smarter, achieve more, and build lasting value.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
