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
      className="scroll-mt-24 py-36 relative overflow-hidden bg-gradient-to-br from-secondary/20 via-secondary/50 to-secondary/80 text-black">

      <div className="container text-center">
        <h1 className="text-5xl md:text-6xl leading-tight text-primary">
          {title}
        </h1>

        <p className="mt-8 text-lg text-primary max-w-3xl mx-auto">
          {subtitle}
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center mt-12 px-10 py-4 
             rounded-full bg-brand.gold text-black font-semibold
             shadow-lg transition-all duration-300
             hover:bg-brand.gold/90 hover:scale-105
             active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand.gold"
        >
          {cta}
        </Link>

      </div>
    </section>
  );
}

