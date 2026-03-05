export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 md:py-28">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-white/90">
          Kendra International helps small and medium-sized enterprises scale,
          streamline, and succeed with tailored strategy, finance, and
          operational advisory.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          className="h-8 w-full sm:h-12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
