import { CheckCircle2, Target, Users, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy">Our Core Values</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/20 p-3">
              <Target className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Focus on Results</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              Every recommendation is measured by impact on your bottom line
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/20 p-3">
              <Zap className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Speed & Efficiency</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              Rapid deployment with proven methodologies that deliver fast outcomes
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/20 p-3">
              <Users className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Partnership Mindset</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              We succeed when you succeed, aligned incentives and shared goals
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/20 p-3">
              <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-navy">Transparency</h3>
            <p className="mt-2 text-sm text-slate-text/70">
              Clear communication, honest assessments, and no hidden agendas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
