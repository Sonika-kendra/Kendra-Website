export default function StorySection() {
  return (
    <section className="w-full">

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Image */}
        <article className="border border-border overflow-hidden">
          <img
            src="/about/about-us-information-service-sharing-join-concept_53876-124056.avif"
            alt="About Kendra International"
            className="h-80 w-full object-cover"
          />
        </article>

        {/* Text */}
        <article className="border border-border bg-white flex items-center">
          <div className="p-12">
            <h2 className="font-display text-3xl font-bold text-navy">
              About Kendra International
            </h2>
            <p className="mt-4 leading-relaxed text-slate-text/80 max-w-5xl">
              Kendra International is a strategic advisory firm focused on
              helping SMEs and scale-ups solve challenges and unlock growth.
              We work closely with founders and leadership teams to strengthen
              business models, improve financial control, and build scalable
              operations.
            </p>
          </div>
        </article>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Text */}
        <article className="border border-border bg-off-white flex items-center">
          <div className="p-12">
            <h2 className="font-display text-3xl font-bold text-navy">
              Our Mission
            </h2>
            <p className="mt-4 leading-relaxed text-slate-text/80 max-w-5xl">
              Our mission is to make high-impact strategy and execution support
              practical and accessible for growing businesses. We offer a
              flexible consulting model that combines deep expertise with a
              hands-on approach so your team can move quickly, improve
              performance, and sustain long-term value creation.
            </p>
          </div>
        </article>

        {/* Image */}
        <article className="border border-border overflow-hidden">
          <img
            src="/about/sean-stratton-ObpCE_X3j6U-unsplash.jpg"
            alt="Our Mission"
            className="h-80 w-full object-cover"
          />
        </article>
      </div>

    </section>
  );
}