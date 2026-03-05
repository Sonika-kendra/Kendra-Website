export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/about/pexels-pixabay-247676.jpg')] bg-cover bg-[position:100%_center] md:bg-[position:120%_center] lg:bg-[position:130%_center]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            About Us
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Kendra International helps small and medium-sized enterprises scale,
            streamline, and succeed with tailored strategy, finance, and operational advisory.
          </p>
        </div>
      </div>

    </section>
  );
}