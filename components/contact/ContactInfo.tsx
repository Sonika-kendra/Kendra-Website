import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="lg:col-span-1 space-y-8">
      <div className="bg-off-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/20">
              <Mail className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy">Email</h3>
            <a
              href="mailto:hello@kendra.global"
              className="mt-2 text-slate-text/80 hover:text-white transition"
            >
              hello@kendra.global
            </a>
          </div>
        </div>
      </div>

      <div className="bg-off-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/20">
              <Phone className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy">Phone</h3>
            <a
              href="tel:+44..."
              className="mt-2 text-slate-text/80 hover:text-white transition"
            >
              Available on request
            </a>
          </div>
        </div>
      </div>

      <div className="bg-off-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/20">
              <MapPin className="h-6 w-6 text-white" strokeWidth={1.5} />
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

