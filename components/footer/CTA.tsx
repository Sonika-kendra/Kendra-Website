import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-slate-text/70">
          Speak with our consultants today.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
