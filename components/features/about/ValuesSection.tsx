import { CheckCircle2, Target, Users, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="bg-off-white py-16 md:py-20 w-full">

      {/* Heading */}
      <div className="text-center px-6 mb-12">
        <h2 className="font-display text-3xl font-bold text-navy">
          Why Choose Kendra International?
        </h2>
        <p className="mt-3 text-slate-text/70">
          Success is built on more than ideas. It needs execution, accountability, and expert guidance. Here is how we support your growth.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">

        {/* Card 1 */}
        <div className="flex items-center gap-4 px-8 py-10 border border-border bg-white">
          <div className="inline-flex items-center justify-center rounded-lg bg-muted p-3">
            <Target className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>

          <div>
            <h3 className="font-display font-semibold text-navy">
              Tailored Strategy
            </h3>
            <p className="mt-2 text-sm text-slate-text/70">
              We customize every engagement to your business stage,
              market, and goals.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 px-8 py-10 border border-border bg-white">
          <div className="inline-flex items-center justify-center rounded-lg bg-muted p-3">
            <Zap className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>

          <div>
            <h3 className="font-display font-semibold text-navy">
              Cross-Functional Expertise
            </h3>
            <p className="mt-2 text-sm text-slate-text/70">
              Our team brings finance, strategy, operations, and M&A
              experience under one roof.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 px-8 py-10 border border-border bg-white">
          <div className="inline-flex items-center justify-center rounded-lg bg-muted p-3">
            <Users className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>

          <div>
            <h3 className="font-display font-semibold text-navy">
              Action-Oriented Delivery
            </h3>
            <p className="mt-2 text-sm text-sm text-slate-text/70">
              We do not stop at recommendations. We help implement and
              embed the right changes.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-4 px-8 py-10 border border-border bg-white">
          <div className="inline-flex items-center justify-center rounded-lg bg-muted p-3">
            <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>

          <div>
            <h3 className="font-display font-semibold text-navy">
              Trusted Partner Mindset
            </h3>
            <p className="mt-2 text-sm text-slate-text/70">
              We work as an extension of your leadership team with
              transparency and clear accountability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}