import Link from "next/link";
import { footerCta } from "@/config/site";

export default function CTA() {
  return (
    <section className="py-12 md:py-16 mb-12 md:mb-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">
          {footerCta.title}
        </h2>
        <p className="mt-4 text-slate-text/70">
          {footerCta.description}
        </p>
        <div className="mt-6">
          <Link
            href={footerCta.buttonHref}
            className="btn-primary"
          >
            {footerCta.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
