import { servicesContent } from "@/content/services";

export default function MAPage() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-semibold">
        {servicesContent.ma.title}
      </h1>

      <p className="mt-6 text-slate-600 whitespace-pre-line">
        {servicesContent.ma.body}
      </p>
    </section>
  );
}
