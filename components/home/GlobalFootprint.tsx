"use client";

import { useState } from "react";
import { MapPin, Send, CheckCircle2 } from "lucide-react";

export default function GlobalFootprint() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => null);
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Global Reach, Local Touch</h2>
          <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">Serving businesses across continents with personalized advisory</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 items-center">
          {/* Locations & Map */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/20 mt-1">
                  <MapPin className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Europe & UK</h3>
                  <p className="text-sm text-slate-text/70">London, Frankfurt, Geneva</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/20 mt-1">
                  <MapPin className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Asia Pacific</h3>
                  <p className="text-sm text-slate-text/70">Singapore, Mumbai, Sydney</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/20 mt-1">
                  <MapPin className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Americas</h3>
                  <p className="text-sm text-slate-text/70">New York, Toronto, São Paulo</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-off-white rounded-xl">
              <p className="font-semibold text-navy mb-3">Ready to scale globally?</p>
              <p className="text-sm text-slate-text/70 mb-4">Let&apos;s start building your international success story</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-lg font-display font-bold text-navy">Message Sent!</p>
                <p className="mt-2 text-sm text-slate-text/70">{"We'll be in touch shortly."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-semibold text-navy mb-4">Get in Touch</h3>
                
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                />
                
                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                />
                
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm text-slate-text outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors resize-none"
                />
                
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
