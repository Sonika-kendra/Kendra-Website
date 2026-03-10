import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 md:py-16 mb-12 md:mb-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-slate-text/70">
          Speak with our consultants today.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
