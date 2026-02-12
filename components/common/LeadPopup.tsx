"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X, Sparkles } from "lucide-react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      await fetch("/api/zoho/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName")?.toString() || "",
          lastName: formData.get("lastName")?.toString() || "",
          email: formData.get("email")?.toString() || "",
          company: formData.get("company")?.toString() || "",
        }),
      });

      setSuccess(true);

      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
        setForm({ firstName: "", lastName: "", company: "", email: "" });
      }, 2000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden animate-fade-in">
        {/* Decorative header */}
        <div className="h-1 bg-gradient-to-r from-navy via-white to-navy" />
        
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 p-1 rounded-lg text-slate-text/40 hover:text-slate-text hover:bg-slate-text/5 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {!success ? (
          <div className="p-8">
            {/* Icon & Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-xl font-display font-bold text-navy">Special Offer!</h2>
            </div>
            
            <p className="text-sm text-slate-text/70 leading-relaxed mb-6">
              Get a free <strong>Market Analysis & Growth Report</strong> customized for your sector. Includes actionable insights to boost business valuation.
            </p>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  required
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  required
                />
              </div>
              
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company *"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                required
              />
              
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Work Email *"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                required
              />

              <label className="flex items-start gap-2 text-xs text-slate-text/70 pt-2">
                <input type="checkbox" required className="mt-1 flex-shrink-0" />
                <span>
                  I agree to receive insights and analysis. Read our{" "}
                  <a href="/privacy" className="underline text-navy hover:text-navy/80 transition-colors">Privacy Policy</a>
                </span>
              </label>

              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-navy to-navy/80 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? "Sending..." : "Get Free Report"}
              </button>
            </form>

            <p className="mt-4 text-xs text-slate-text/60 text-center">
              ✓ No credit card required · Free report within 24 hours
            </p>
          </div>
        ) : (
          <div className="p-8 text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-display font-bold text-navy">Success!</h3>
            <p className="mt-2 text-sm text-slate-text/70">Check your email for your personalized report.</p>
          </div>
        )}
      </div>
    </div>
  );
}
