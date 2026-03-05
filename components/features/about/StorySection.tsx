export default function StorySection() {
  return (
    <section className="mt-5 w-full bg-background">

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] w-full">

        {/* Image */}
        <div className="h-[320px] md:h-[380px] overflow-hidden group">
          <img
            src="/about/jeremy-perkins-UgNjyPkphtU-unsplash.jpg"
            alt="About Kendra International"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Text */}
        <div className="flex items-center border border-border bg-card">
          <div className="p-8 lg:p-10">
            <h2 className="ml-10 font-display text-2xl font-bold text-foreground md:text-3xl">
              About Kendra International
            </h2>
            <p className="mt-4 ml-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Kendra International is a strategic advisory firm focused on
              helping SMEs and scale-ups solve challenges and unlock growth.
              We work closely with founders and leadership teams to strengthen
              business models, improve financial control, and build scalable
              operations.
            </p>
          </div>
        </div>

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] w-full">

        {/* Text */}
        <div className="flex items-center border border-border bg-card">
          <div className="p-8 lg:p-10">
            <h2 className="ml-10 font-display text-2xl font-bold text-foreground md:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 ml-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Our mission is to make high-impact strategy and execution support
              practical and accessible for growing businesses. We offer a
              flexible consulting model that combines deep expertise with a
              hands-on approach so your team can move quickly, improve
              performance, and sustain long-term value creation.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="h-[320px] md:h-[380px] overflow-hidden group">
          <img
            src="/about/pexels-pixabay-209728.jpg"
            alt="Our Mission"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

      </div>

    </section>
  );
}
