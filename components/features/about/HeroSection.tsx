export default function AboutHeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[url('/about/pexels-pixabay-247676.jpg')] bg-cover bg-center"
    >
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          About Us
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-white/90">
          Kendra International helps small and medium-sized enterprises scale,
          streamline, and succeed with tailored strategy, finance, and
          operational advisory.
        </p>
      </div>
    </section>
  );
}