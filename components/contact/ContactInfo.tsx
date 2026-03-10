import { Mail, Phone, MapPin } from "lucide-react";
import { footer } from "@/config/site";
import { contactInfoContent } from "@/config/contact";

export function ContactInfo() {
  const emailLink =
    footer.social.find((s) => s.label === "Email")?.href ||
    contactInfoContent.defaultEmailHref;
  const phoneLink =
    footer.social.find((s) => s.label === "Phone")?.href ||
    contactInfoContent.defaultPhoneHref;
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
            <h3 className="font-display font-semibold text-navy">
              {contactInfoContent.emailTitle}
            </h3>
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
            <h3 className="font-display font-semibold text-navy">
              {contactInfoContent.phoneTitle}
            </h3>
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
            <h3 className="font-display font-semibold text-navy">
              {contactInfoContent.locationsTitle}
            </h3>
            <p className="mt-2 text-slate-text/80 text-sm">
              {contactInfoContent.locations.map((location, index) => (
                <span
                  key={location}
                  className={`block${index > 0 ? " mt-2" : ""}`}
                >
                  {location}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 border border-white/30 rounded-xl p-6">
        <h3 className="font-display font-semibold text-navy">
          {contactInfoContent.responseTimeTitle}
        </h3>
        <p className="mt-2 text-sm text-slate-text/80">
          {contactInfoContent.responseTimeDescription}
        </p>
      </div>
    </div>
  );
}
