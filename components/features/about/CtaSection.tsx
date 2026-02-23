import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-off-white py-16 text-center md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-slate-text/70">
          Let&apos;s discuss how we can help you scale smarter, achieve more,
          and build lasting value.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
