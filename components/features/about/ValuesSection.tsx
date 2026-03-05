import { CheckCircle2, Target, Users, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy">
            Why Choose Kendra International?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-text/70">
            Success is built on more than ideas. It needs execution,
            accountability, and expert guidance. Here is how we support your
            growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-muted p-3">
              <Target className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Tailored Strategy</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              We customize every engagement to your business stage, market, and
              goals.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-muted p-3">
              <Zap className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">
              Cross-Functional Expertise
            </h3>
            <p className="mt-2 text-sm text-slate-text/70">
              Our team brings finance, strategy, operations, and M&A experience
              under one roof.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-muted p-3">
              <Users className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Action-Oriented Delivery</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              We do not stop at recommendations. We help implement and embed
              the right changes.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-muted p-3">
              <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Trusted Partner Mindset</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              We work as an extension of your leadership team with transparency
              and clear accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
