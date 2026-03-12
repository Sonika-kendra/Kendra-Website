import { contactCtaContent } from "@/config/pages/contact";

export function ContactCTA() {
  return (
    <section className="py-10 md:py-12 mb-12 bg-off-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy">
          {contactCtaContent.title}
        </h2>
        <p className="mt-2 text-slate-text/70">
          {contactCtaContent.description}
        </p>
      </div>
    </section>
  );
}

