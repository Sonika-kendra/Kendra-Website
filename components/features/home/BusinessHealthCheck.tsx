"use client";

import { useState } from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function BusinessHealthCheck({ transparent = false }: { transparent?: boolean }) {
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
  const inputClassName =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:ring-slate-700";

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
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className={`relative overflow-hidden rounded-3xl ${transparent ? '' : 'border border-slate-200 bg-white shadow-2xl dark:border-slate-700/70 dark:bg-slate-900/90 dark:shadow-[0_30px_90px_-35px_rgba(2,6,23,1)]'}`}>
            {!transparent && <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_55%)]" />}
            {!transparent && <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_85%_10%,_rgba(16,185,129,0.14),_transparent_40%)]" />}

            <div className="relative p-8 text-center md:p-16">
              <div className="flex justify-center mb-6">
                <div className={`rounded-full p-3 ${transparent ? 'bg-white/10' : 'bg-slate-100 dark:bg-slate-800/70'}`}>
                  <TrendingUp className={`h-8 w-8 ${transparent ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`} strokeWidth={1.5} />
                </div>
              </div>

              <h2 className={`text-3xl font-display font-bold sm:text-4xl ${transparent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                Business Health Check Analyzer
              </h2>
              <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${transparent ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>
                Get instant insights into your business performance. Our AI-powered analyzer evaluates revenue growth,
                margin health, and operational efficiency in seconds.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className={`rounded-xl p-6 backdrop-blur-sm ${transparent ? 'border border-white/20 bg-white/10' : 'border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70'}`}>
                  <CheckCircle2 className={`mx-auto mb-3 h-6 w-6 ${transparent ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`} />
                  <h3 className={`mb-2 font-semibold ${transparent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Revenue Analysis</h3>
                  <p className={`text-sm ${transparent ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>Track growth trends and identify opportunities</p>
                </div>
                <div className={`rounded-xl p-6 backdrop-blur-sm ${transparent ? 'border border-white/20 bg-white/10' : 'border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70'}`}>
                  <CheckCircle2 className={`mx-auto mb-3 h-6 w-6 ${transparent ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`} />
                  <h3 className={`mb-2 font-semibold ${transparent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Margin Health</h3>
                  <p className={`text-sm ${transparent ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>Understand profitability metrics</p>
                </div>
                <div className={`rounded-xl p-6 backdrop-blur-sm ${transparent ? 'border border-white/20 bg-white/10' : 'border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70'}`}>
                  <CheckCircle2 className={`mx-auto mb-3 h-6 w-6 ${transparent ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`} />
                  <h3 className={`mb-2 font-semibold ${transparent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>Quick Snapshot</h3>
                  <p className={`text-sm ${transparent ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>Actionable insights in moments</p>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={() => setShowModal(true)}
                  className={transparent ? 'btn-primary' : 'inline-flex items-center justify-center rounded-lg bg-slate-900 px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'}
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
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-10 p-1 text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Analysis Submitted!</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  We&apos;ll generate your personalized report and send it to your email shortly.
                </p>
              </div>
            ) : (
              <div className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                  <TrendingUp className="h-6 w-6 text-slate-700 dark:text-slate-200" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Quick Analysis</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Share your details and get instant insights</p>

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
                      className={inputClassName}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className={inputClassName}
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClassName}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClassName}
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={inputClassName}
                  />

                  <input
                    type="text"
                    name="revenue"
                    placeholder="Annual Revenue (optional)"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className={inputClassName}
                  />

                  <input
                    type="number"
                    name="employees"
                    placeholder="Number of Employees (optional)"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className={inputClassName}
                  />

                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={inputClassName}
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

                  <label className="flex items-start gap-2 pt-2 text-xs text-slate-600 dark:text-slate-300">
                    <input type="checkbox" required className="mt-1" />
                    <span>
                      I agree to receive insights and analysis. See our{" "}
                      <a
                        href="/privacy"
                        className="underline text-slate-900 transition-colors hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <button
                    disabled={loading}
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
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
