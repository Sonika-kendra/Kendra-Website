import Link from "next/link";
import { aboutCtaContent } from "@/config/pages/about";

export default function CtaSection() {
  return (
    <section className="bg-off-white py-16 text-center md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          {aboutCtaContent.title}
        </h2>
        <p className="mt-4 text-slate-text/70">
          {aboutCtaContent.description}
        </p>
        <div className="mt-8">
          <Link href={aboutCtaContent.buttonHref} className="btn-primary">
            {aboutCtaContent.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
