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
    <section id="contact" className="scroll-mt-24 py-24 bg-primary">
      <div className="container text-center">
        <h1 className="text-5xl md:text-6xl leading-tight">
          {title}
        </h1>

        <p className="mt-8 text-lg text-slate-300 max-w-3xl mx-auto">
          {subtitle}
        </p>

        <a
          href="#contact"
          className="inline-block mt-12 px-10 py-4 bg-brand.gold text-brand.navy rounded-md font-medium hover:bg-brand.goldSoft transition"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}

