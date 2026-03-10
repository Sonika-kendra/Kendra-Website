import { WebsiteUrlConfig } from "./routing";

export const contactPageHero = {
  title: "Get in Touch",
  description:
    "Let's discuss how we can help scale your business. Reach out today.",
} as const;

export const contactInfoContent = {
  emailTitle: "Email",
  phoneTitle: "Phone",
  locationsTitle: "Locations",
  locations: ["Europe", "Asia Pacific", "Americas & Latam"],
  responseTimeTitle: "Response Time",
  responseTimeDescription:
    "We typically respond to inquiries within 24 business hours.",
  defaultEmailHref: WebsiteUrlConfig.Email,
  defaultPhoneHref: WebsiteUrlConfig.Phone,
} as const;

export const contactFormContent = {
  requiredFieldsError: "Please fill in first name, last name, email, and message.",
  unexpectedError: "An unexpected error occurred. Please try again later.",
  success: {
    title: "Thank You!",
    description: "We've received your enquiry. Our team will contact you shortly.",
  },
  fields: {
    firstName: {
      label: "First Name",
      placeholder: "Your first name",
    },
    lastName: {
      label: "Last Name",
      placeholder: "Your last name",
    },
    email: {
      label: "Email Address",
      placeholder: "you@company.com",
    },
    company: {
      label: "Company",
      placeholder: "Your company",
    },
    message: {
      label: "Message",
      placeholder: "Tell us about your project or challenge...",
    },
  },
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  privacyNote:
    "We respect your privacy. Your information will only be used to contact you about your inquiry.",
} as const;

export const contactCtaContent = {
  title: "Quick Inquiry?",
  description:
    "Send us a message and we'll get back to you within 24 hours with insights on how we can help.",
} as const;
