// components/WhyKendra.tsx
type Reason = {
  title: string;
  points: string[];
};

type WhyKendraProps = {
  heading: string;
  reasons: Reason[];
};

export default function WhyKendra({ heading, reasons }: WhyKendraProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl text-center mb-16">
          {heading}
        </h2>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 rounded-xl">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl mb-4">
                {reason.title}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {reason.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
