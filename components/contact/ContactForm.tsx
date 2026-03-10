"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/zoho/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-card text-card-foreground border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
          <div className="h-16 w-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
            <Send className="h-8 w-8 ml-1" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Thank You!</h3>
          <p className="text-muted-foreground text-lg max-w-sm">
            We&apos;ve received your enquiry. Our team will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
      <div className="bg-card text-card-foreground border border-border rounded-xl p-8">
        <div className="space-y-6">
          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
              {errorMessage}
            </div>
          )}
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
                disabled={isLoading}
                className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
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
                disabled={isLoading}
                className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
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
              disabled={isLoading}
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
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
              disabled={isLoading}
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
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
              disabled={isLoading}
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none disabled:opacity-50"
              placeholder="Tell us about your project or challenge..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition duration-200 flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </>
            )}
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
