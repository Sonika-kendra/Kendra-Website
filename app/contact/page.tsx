import type { Metadata } from "next";
import { pageMeta } from "@/config/site";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = pageMeta.contact as Metadata;

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Let&apos;s discuss how we can help scale your business. Reach out today.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
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
                    <a href="mailto:hello@kendra.global" className="mt-2 text-slate-text/80 hover:text-white transition">
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
                    <a href="tel:+44..." className="mt-2 text-slate-text/80 hover:text-white transition">
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

            {/* Contact Form */}
            <form className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-border rounded-xl p-8">
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-navy">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-slate-text transition duration-200 placeholder:text-slate-text/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-navy">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-slate-text transition duration-200 placeholder:text-slate-text/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-slate-text transition duration-200 placeholder:text-slate-text/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-slate-text transition duration-200 placeholder:text-slate-text/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-slate-text transition duration-200 placeholder:text-slate-text/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-navy font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition duration-200 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                  </button>

                  <p className="text-xs text-slate-text/60 text-center">
                    We respect your privacy. Your information will only be used to contact you about your inquiry.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Quick Inquiry?
          </h2>
          <p className="mt-3 text-slate-text/70">
            Send us a message and we&apos;ll get back to you within 24 hours with insights on how we can help.
          </p>
        </div>
      </section>
    </main>
  );
}
