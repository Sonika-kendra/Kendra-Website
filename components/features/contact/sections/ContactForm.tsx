"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { contactFormContent } from "@/config/pages/contact";

type ContactFormResponse = {
  success?: boolean;
  error?: string;
};

type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

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
    const data: ContactFormPayload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    console.log("[contact-form] submit", data);

    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      setStatus("error");
      setErrorMessage(contactFormContent.requiredFieldsError);
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/zoho/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const rawResponse = await response.text();
      let result: ContactFormResponse = {};

      try {
        result = rawResponse ? (JSON.parse(rawResponse) as ContactFormResponse) : {};
      } catch {
        result = {};
      }

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        const fallbackError = rawResponse
          ? `Request failed (${response.status}): ${rawResponse}`
          : `Request failed (${response.status})`;

        setStatus("error");
        setErrorMessage(result.error || fallbackError);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(contactFormContent.unexpectedError);
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
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {contactFormContent.success.title}
          </h3>
          <p className="text-muted-foreground text-lg max-w-sm">
            {contactFormContent.success.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="lg:col-span-2 space-y-6">
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
                {contactFormContent.fields.firstName.label}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                disabled={isLoading}
                className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
                placeholder={contactFormContent.fields.firstName.placeholder}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-foreground"
              >
                {contactFormContent.fields.lastName.label}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                disabled={isLoading}
                className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
                placeholder={contactFormContent.fields.lastName.placeholder}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground"
            >
              {contactFormContent.fields.email.label}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isLoading}
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
              placeholder={contactFormContent.fields.email.placeholder}
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-foreground"
            >
              {contactFormContent.fields.company.label}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              disabled={isLoading}
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50"
              placeholder={contactFormContent.fields.company.placeholder}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-foreground"
            >
              {contactFormContent.fields.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={isLoading}
              className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none disabled:opacity-50"
              placeholder={contactFormContent.fields.message.placeholder}
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
                {contactFormContent.submittingLabel}
              </>
            ) : (
              <>
                {contactFormContent.submitLabel}
                <Send
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            {contactFormContent.privacyNote}
          </p>
        </div>
      </div>
    </form>
  );
}
