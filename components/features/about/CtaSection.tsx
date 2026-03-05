import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-off-white py-16 text-center md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Let&apos;s Chat
        </h2>
        <p className="mt-4 text-slate-text/70">
          Whether you are planning growth, preparing for investment, or solving
          complex business challenges, we are here to help. Contact us to start
          the conversation.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
