import { WebsiteUrlConfig } from "./routing";

export const logoContent = {
  altText: "Kendra International",
  linkAriaLabel: "Kendra International",
} as const;

export const leadPopupContent = {
  requiredFieldsError: "Please fill in all required fields (*)",
  consentRequiredError: "Please accept the privacy policy to continue.",
  submissionFailedError: "Submission failed",
  fallbackError: "Something went wrong",
  closeModalAriaLabel: "Close modal",
  success: {
    title: "Report Submitted!",
    description: "You'll receive your personalized report shortly.",
  },
  modal: {
    title: "Get Your Analysis",
    description:
      "Enter your details to receive a complimentary market report.",
  },
  fields: {
    firstName: "First Name *",
    lastName: "Last Name *",
    email: "Work Email *",
    company: "Company Name (optional)",
    phone: "Phone (optional)",
    service: "Select Service",
    message: "How can we help?",
  },
  consentPrefix: "I agree to receive insights and analysis. See our",
  privacyPolicyLabel: "Privacy Policy",
  privacyPolicyHref: WebsiteUrlConfig.Privacy,
  submitLabel: "Get My Report",
  submittingLabel: "Processing...",
} as const;

export const downloadButtonContent = {
  label: "Download PDF",
} as const;
