import Button from "../ui/Button";
import Heading from "../ui/Heading";

export default function Hero() {
  return (
    <section className="bg-primary text-white py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="font-heading text-5xl leading-tight">
          Strategic M&A & Business Consulting
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          Supporting organizations through growth, transformation,
          and high-value transactions.
        </p>

        <div className="mt-10 flex gap-4">
          <Button href="/contact">Contact Us</Button>
          <Button variant="secondary" href="/services">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
