import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-semibold">
        Let’s Discuss Your Strategic Priorities
      </h2>

      <p className="mt-6 text-slate-600">
        Speak with our advisory team today.
      </p>

      <div className="mt-10">
        <Button href="/contact">Contact Our Advisors</Button>
      </div>
    </section>
  );
}
