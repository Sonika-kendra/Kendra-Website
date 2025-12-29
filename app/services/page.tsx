import { services } from "@/data/services";
import ServiceGroup from "@/components/blocks/ServiceGroup";

export default function Services() {
  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-3 gap-16">
        {services.map((s) => (
          <ServiceGroup key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
