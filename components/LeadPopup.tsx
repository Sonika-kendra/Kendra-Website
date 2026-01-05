"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
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

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);

      // auto close after success
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
        setForm({ name: "", company: "", email: "" });
      }, 2000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        {!success ? (
          <>
            <h2 className="mb-2 text-xl font-semibold">
              Get a Complimentary Market Analysis and Growth Report!
            </h2>

            <p className="mb-4 text-sm text-gray-600">
              Customised report for your sector and company, including insights
              on how to increase business valuation.
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-md border px-3 py-2"
                required
              />

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full rounded-md border px-3 py-2"
                required
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Work Email"
                className="w-full rounded-md border px-3 py-2"
                required
              />

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" required />
                <span>
                  I agree to the{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-md bg-primary py-2 text-white hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get Report Now!"}
              </button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              🎉 Thank you!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We’ll send your report shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
