import AnimateIn from "@/components/AnimateIn";

export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimateIn>
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We are a strategic advisory firm specializing in M&A and business
            transformation.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
