"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup on every refresh
    const timer = setTimeout(() => setOpen(true), 1200);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-2 text-xl font-semibold">
          Get a Complimentary Market Analysis and Growth Report!
        </h2>

        <p className="mb-4 text-sm text-gray-600">
          Customised report for your sector and company, including insights
          on how to increase business valuation.
        </p>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border px-3 py-2"
            required
          />

          <input
            type="text"
            placeholder="Company"
            className="w-full rounded-md border px-3 py-2"
            required
          />

          <input
            type="email"
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
            type="submit"
            className="w-full rounded-md bg-primary py-2 text-white hover:opacity-90"
          >
            Get Report Now!
          </button>
        </form>
      </div>
    </div>
  );
}
