export default function StorySection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy">Our Story</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
            Founded by experienced CFOs and M&A advisors who saw an opportunity
            to bring enterprise-level advisory to growth-stage SMEs
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="leading-relaxed text-slate-text/80">
            Kendra International emerged from a simple insight: high-quality
            strategic advisory and operational transformation should not be
            exclusively reserved for large enterprises. Growing SMEs often
            struggle with the same challenges, including finance function
            optimization, cost control, and strategic acquisitions, but lack
            access to world-class advisory at the right price point.
          </p>

          <p className="mt-4 leading-relaxed text-slate-text/80">
            We founded Kendra to bridge that gap. With deep expertise in
            financial advisory, operational transformation, and M&A, we deliver
            measurable results in weeks, not months. Our track record spans
            sectors from SaaS and manufacturing to financial services,
            consistently helping clients increase valuations, reduce costs, and
            accelerate growth.
          </p>
        </div>
      </div>
    </section>
  );
}
