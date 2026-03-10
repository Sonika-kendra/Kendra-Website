import { Mail, Phone, MapPin } from "lucide-react";
import { footer } from "@/config/site";

export function ContactInfo() {
  const emailLink = footer.social.find((s) => s.label === "Email")?.href || "mailto:hello@kendra.global";
  const phoneLink = footer.social.find((s) => s.label === "Phone")?.href || "tel:+44...";
  return (
    <div className="lg:col-span-1 space-y-8">
      <div className="bg-off-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-steel/20">
              <Mail className="h-6 w-6 text-navy" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy">Email</h3>
            <a
              href={emailLink}
              className="mt-2 text-slate-text/80 hover:text-white transition"
            >
              {emailLink.replace("mailto:", "")}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-off-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-steel/20">
              <Phone className="h-6 w-6 text-navy" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy">Phone</h3>
            <a
              href={phoneLink}
              className="mt-2 text-slate-text/80 hover:text-white transition"
            >
              {phoneLink.replace("tel:", "")}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-off-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-steel/20">
              <MapPin className="h-6 w-6 text-navy" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy">Locations</h3>
            <p className="mt-2 text-slate-text/80 text-sm">
              <span className="block">Europe</span>
              <span className="block mt-2">Asia Pacific</span>
              <span className="block mt-2">Americas &amp; Latam</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 border border-white/30 rounded-xl p-6">
        <h3 className="font-display font-semibold text-navy">Response Time</h3>
        <p className="mt-2 text-sm text-slate-text/80">
          We typically respond to inquiries within 24 business hours.
        </p>
      </div>
    </div>
  );
}
