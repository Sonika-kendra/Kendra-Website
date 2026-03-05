export default function StorySection() {
  return (
    <section className="w-full mt-5">

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
        <div className="flex items-center bg-white border border-border">
          <div className="p-8 lg:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy ml-10">
              About Kendra International
            </h2>
            <p className="mt-4 ml-10 leading-relaxed text-slate-text/80 max-w-xl text-base md:text-lg">
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
        <div className="flex items-center bg-off-white border border-border">
          <div className="p-8 lg:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy ml-10">
              Our Mission
            </h2>
            <p className="mt-4 ml-10 leading-relaxed text-slate-text/80 max-w-xl text-base md:text-lg">
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