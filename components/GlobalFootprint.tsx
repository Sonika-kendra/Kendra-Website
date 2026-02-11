"use client";

import { useState } from "react";

export default function GlobalFootprint() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "" });
    }, 3000);
  };

  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
          Global Footprint
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 items-center">
          {/* World map illustration */}
          <div className="flex flex-col items-start">
            {/* Simple world map dots */}
            <svg
              viewBox="0 0 800 400"
              className="w-full h-auto opacity-30"
              aria-hidden="true"
            >
              {/* Simplified world map outline using dots */}
              <g fill="rgb(26,42,74)">
                {/* North America */}
                <circle cx="180" cy="120" r="3" /><circle cx="200" cy="110" r="3" />
                <circle cx="160" cy="140" r="3" /><circle cx="190" cy="150" r="3" />
                <circle cx="210" cy="130" r="3" /><circle cx="170" cy="160" r="3" />
                <circle cx="150" cy="130" r="3" /><circle cx="220" cy="140" r="3" />
                {/* South America */}
                <circle cx="240" cy="250" r="3" /><circle cx="250" cy="270" r="3" />
                <circle cx="230" cy="280" r="3" /><circle cx="260" cy="300" r="3" />
                <circle cx="245" cy="310" r="3" />
                {/* Europe */}
                <circle cx="400" cy="100" r="3" /><circle cx="420" cy="110" r="3" />
                <circle cx="380" cy="120" r="3" /><circle cx="410" cy="130" r="3" />
                <circle cx="430" cy="120" r="3" /><circle cx="440" cy="100" r="3" />
                {/* Africa */}
                <circle cx="420" cy="200" r="3" /><circle cx="440" cy="220" r="3" />
                <circle cx="430" cy="240" r="3" /><circle cx="450" cy="260" r="3" />
                <circle cx="410" cy="230" r="3" />
                {/* Asia */}
                <circle cx="520" cy="120" r="3" /><circle cx="550" cy="130" r="3" />
                <circle cx="580" cy="110" r="3" /><circle cx="600" cy="140" r="3" />
                <circle cx="620" cy="120" r="3" /><circle cx="640" cy="150" r="3" />
                <circle cx="560" cy="160" r="3" /><circle cx="590" cy="170" r="3" />
                {/* Australia */}
                <circle cx="640" cy="280" r="3" /><circle cx="660" cy="290" r="3" />
                <circle cx="650" cy="270" r="3" /><circle cx="670" cy="280" r="3" />
              </g>
            </svg>

            <div className="mt-6">
              <h3 className="text-2xl font-bold font-serif text-navy">
                {"Let's Start Building Your Success Story"}
              </h3>
              <p className="mt-2 text-sm text-slate-text/70">
                We work with businesses across the globe to deliver measurable results.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl bg-white p-6 shadow-sm border border-border">
            {submitted ? (
              <div className="py-10 text-center">
                <p className="text-lg font-semibold text-navy">Thank you!</p>
                <p className="mt-2 text-sm text-slate-text/70">
                  {"We'll be in touch shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
                >
                  Contact Us
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
