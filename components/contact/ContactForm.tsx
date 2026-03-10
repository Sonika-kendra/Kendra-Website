import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="lg:col-span-2 space-y-6">
      <div className="bg-card text-card-foreground border border-border rounded-xl p-8">
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-foreground"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-foreground"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-foreground"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="Your company"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
              placeholder="Tell us about your project or challenge..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition duration-200 flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              strokeWidth={2}
            />
          </button>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Your information will only be used to
            contact you about your inquiry.
          </p>
        </div>
      </div>
    </form>
  );
}
