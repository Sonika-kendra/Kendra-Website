export default function ServicesPage() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16">Our Services</h1>

        <div className="space-y-12 max-w-3xl">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Mergers & Acquisitions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Full lifecycle transaction advisory.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Business Consulting
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Strategy execution and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
