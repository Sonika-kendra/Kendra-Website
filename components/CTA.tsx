import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="
        scroll-mt-24 py-24 relative overflow-hidden text-primary
        bg-gradient-to-br
        from-secondary/20 via-secondary/50 to-secondary/80
        dark:from-accent/20 dark:via-accent/50 dark:to-accent/80
      "
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Your Growth Strategy
        </h2>

        <p className="text-primary/80 mb-6 text-lg">
          Speak with our consultants today.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center px-10 py-4
            rounded-full bg-brand.gold text-primary font-bold
            shadow-lg transition-all duration-300
            hover:bg-brand.gold/90 hover:scale-105
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand.gold
          "
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
