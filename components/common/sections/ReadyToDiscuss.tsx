import Link from "next/link";
import { WebsiteUrlConfig } from "@/config/routing";

export default function ReadyToDiscuss() {
  return (
    <section className="py-10 text-center md:py-14">
      <div className="w-full px-6">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-text/70">
          Let us identify the right service line for your growth, margin, cash,
          or transaction agenda.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={WebsiteUrlConfig.Contact} className="btn-primary">
            Schedule a Consultation
          </Link>
          <Link
            href={WebsiteUrlConfig.Home}
            className="inline-flex items-center justify-center rounded-lg border border-navy px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}