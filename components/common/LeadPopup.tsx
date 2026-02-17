"use client";

import { useState } from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";

interface LeadPopUpProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadPopUp({ open, onClose }: LeadPopUpProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });

  if (!open) return null; // hide when closed

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill in all required fields (*)");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/zoho/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);

      // reset form and close modal after 2s
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "" });
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
      onClick={onClose} // close on overlay click
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 text-slate-text/40 hover:text-slate-text transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-navy">Report Submitted!</h3>
            <p className="mt-2 text-slate-text/70">
              You'll receive your personalized report shortly.
            </p>
          </div>
        ) : (
          <div className="p-8 space-y-6">
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy/10">
                <TrendingUp className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy">Get Your Analysis</h3>
              <p className="text-sm text-slate-text/70 text-center">
                Enter your details to receive a complimentary market report.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg border border-slate-200 px-4 py-3 focus:border-navy focus:ring-1 focus:ring-navy/20 outline-none text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg border border-slate-200 px-4 py-3 focus:border-navy focus:ring-1 focus:ring-navy/20 outline-none text-sm"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Work Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-navy focus:ring-1 focus:ring-navy/20 outline-none text-sm"
              />

              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-navy focus:ring-1 focus:ring-navy/20 outline-none text-sm"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-navy focus:ring-1 focus:ring-navy/20 outline-none text-sm"
              />

              <label className="flex items-start gap-2 text-xs text-slate-text/70 pt-2">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I agree to receive insights and analysis. See our{" "}
                  <a href="/privacy" className="underline text-navy hover:text-navy/80">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-navy py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Get My Report"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
