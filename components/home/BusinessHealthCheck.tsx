"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function BusinessHealthCheck() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    revenue: "",
    employees: "",
    industry: "",
    phone: "",
    company: "",
  });

  // Auto-open modal on page load
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("healthCheckModalShown");
    if (!hasVisited) {
      setShowModal(true);
      sessionStorage.setItem("healthCheckModalShown", "true");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.firstName || !formData.lastName) {
      setError("Please fill in all required fields (* marked)");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      // Submit to Zoho CRM
      const response = await fetch("/api/zoho/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || formData.industry,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          revenue: "",
          employees: "",
          industry: "",
          phone: "",
          company: "",
        });
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/80 opacity-95" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-steel/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-steel/5 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative p-8 md:p-16 text-center text-white">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-steel/20 rounded-full">
                  <TrendingUp className="h-8 w-8 text-steel" strokeWidth={1.5} />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold">Business Health Check Analyzer</h2>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed text-lg">
                Get instant insights into your business performance. Our AI-powered analyzer evaluates revenue growth, 
                margin health, and operational efficiency in seconds.
              </p>
              
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <CheckCircle2 className="h-6 w-6 text-steel mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Revenue Analysis</h3>
                  <p className="text-sm text-white/70">Track growth trends and identify opportunities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <CheckCircle2 className="h-6 w-6 text-steel mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Margin Health</h3>
                  <p className="text-sm text-white/70">Understand profitability metrics</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <CheckCircle2 className="h-6 w-6 text-steel mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quick Snapshot</h3>
                  <p className="text-sm text-white/70">Actionable insights in moments</p>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center rounded-lg bg-steel text-white px-10 py-3.5 text-sm font-semibold transition-all hover:bg-steel/90 hover:shadow-lg hover:shadow-steel/30"
                >
                  Start Your Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 p-1 text-slate-text/40 hover:text-slate-text transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy">Analysis Submitted!</h3>
                <p className="mt-2 text-slate-text/70">We&apos;ll generate your personalized report and send it to your email shortly.</p>
              </div>
            ) : (
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy">Quick Analysis</h3>
                <p className="mt-2 text-sm text-slate-text/70">Share your details and get instant insights</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  />

                  <input
                    type="text"
                    name="revenue"
                    placeholder="Annual Revenue (optional)"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  />

                  <input
                    type="number"
                    name="employees"
                    placeholder="Number of Employees (optional)"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  />

                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                  >
                    <option value="">Select Industry (optional)</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="SaaS">SaaS</option>
                    <option value="Other">Other</option>
                  </select>

                  <label className="flex items-start gap-2 text-xs text-slate-text/70 pt-2">
                    <input type="checkbox" required className="mt-1" />
                    <span>
                      I agree to receive insights and analysis. See our{" "}
                      <a href="/privacy" className="underline text-navy hover:text-navy/80">Privacy Policy</a>
                    </span>
                  </label>

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full rounded-lg bg-navy py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-6"
                  >
                    {loading ? "Processing..." : "Get My Report"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
