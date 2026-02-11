"use client";

import { useEffect, useState } from "react";

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
    const timer = setTimeout(() => setOpen(true), 1200);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 text-slate-text/40 hover:text-slate-text transition-colors"
          aria-label="Close popup"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        {!success ? (
          <>
            <h2 className="mb-2 text-xl font-bold font-serif text-navy">Get a Complimentary Market Analysis and Growth Report!</h2>

            <p className="mb-6 text-sm text-slate-text/70">Customised report for your sector and company, including insights on how to increase business valuation.</p>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                required
              />
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                required
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Work Email"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors"
                required
              />

              <label className="flex items-start gap-2 text-sm text-slate-text/70">
                <input type="checkbox" required className="mt-0.5" />
                <span>
                  I agree to the{" "}
                  <a href="/privacy" className="underline text-navy">Privacy Policy</a>
                </span>
              </label>

              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-lg bg-navy py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get Report Now!"}
              </button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center">
            <h3 className="text-lg font-semibold text-navy">Thank you!</h3>
            <p className="mt-2 text-sm text-slate-text/70">{"We'll send your report shortly."}</p>
          </div>
        )}
      </div>
    </div>
  );
}
