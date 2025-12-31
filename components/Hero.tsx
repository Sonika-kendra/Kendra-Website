import Link from "next/link";

export default function Hero({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta: string;
}) {
  return (
    <section
      id="contact"
      className="
    scroll-mt-24 py-36
    bg-gradient-to-br
    from-white via-secondary/20 to-secondary/40
  "
    >

      <div className="container text-center">
        <h1 className="text-5xl md:text-6xl leading-tight text-primary">
          {title}
        </h1>

        <p className="mt-8 text-lg text-brand.slate max-w-3xl mx-auto">
          {subtitle}
        </p>

        <Link
          href="/contact"
          className="inline-block mt-12 px-10 py-4 bg-brand.gold ..."
        >
          {cta}
        </Link>

      </div>
    </section>
  );
}

