export default function StorySection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-8">
          <article className="rounded-xl border border-border bg-white p-8">
            <h2 className="font-display text-3xl font-bold text-navy">About Kendra International</h2>
            <p className="mt-4 leading-relaxed text-slate-text/80">
              Kendra International is a strategic advisory firm focused on
              helping SMEs and scale-ups solve challenges and unlock growth. We
              work closely with founders and leadership teams to strengthen
              business models, improve financial control, and build scalable
              operations.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-off-white p-8">
            <h2 className="font-display text-3xl font-bold text-navy">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-text/80">
              Our mission is to make high-impact strategy and execution support
              practical and accessible for growing businesses. We offer a
              flexible consulting model that combines deep expertise with a
              hands-on approach so your team can move quickly, improve
              performance, and sustain long-term value creation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
