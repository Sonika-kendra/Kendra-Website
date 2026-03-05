"use client";

import { CheckCircle2, Target, Users, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section
      className="relative w-full py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/about/consulting-business-team-meeting.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white">
            Why Choose Kendra International?
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Success requires execution, accountability, and the right expertise guiding decisions.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card */}
          <div className="group p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white transition duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl">
            <Target className="h-6 w-6 text-primary mb-4 transition group-hover:scale-110" strokeWidth={1.5} />
            <h3 className="font-display font-semibold">
              Tailored Strategy
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Every engagement is customized to your business stage,
              market dynamics, and strategic objectives.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white transition duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl">
            <Zap className="h-6 w-6 text-primary mb-4 transition group-hover:scale-110" strokeWidth={1.5} />
            <h3 className="font-display font-semibold">
              Cross-Functional Expertise
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Finance, strategy, operations, and M&A expertise integrated into one advisory team.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white transition duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl">
            <Users className="h-6 w-6 text-primary mb-4 transition group-hover:scale-110" strokeWidth={1.5} />
            <h3 className="font-display font-semibold">
              Action-Oriented Delivery
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Recommendations are translated into operational improvements and measurable outcomes.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white transition duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl">
            <CheckCircle2 className="h-6 w-6 text-primary mb-4 transition group-hover:scale-110" strokeWidth={1.5} />
            <h3 className="font-display font-semibold">
              Trusted Partner Mindset
            </h3>
            <p className="mt-2 text-sm text-white/80">
              We operate as an extension of your leadership team with transparency and accountability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}