"use client";

import { useState } from "react";
import clsx from "clsx";
import { CheckCircle2, TrendingUp } from "lucide-react";
import type { LeadPopUpProps } from "@/interface/common";
import { leadPopupContent } from "@/config/common";
import { footer } from "@/config/site";

export default function LeadPopUp({ open, onClose }: LeadPopUpProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: [] as string[],
    message: "",
  });

  if (!open) return null; // hide when closed

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError(leadPopupContent.requiredFieldsError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/zoho/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: formData.service.join(", "),
        }),
      });
      if (!res.ok) throw new Error(leadPopupContent.submissionFailedError);

      setSubmitted(true);

      // reset form and close modal after 2s
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: [] as string[], message: "" }); // Changed to array
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : leadPopupContent.fallbackError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="leadPopup-overlay"
      onClick={onClose} // close on overlay click
    >
      <div
        className="leadPopup-panel"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={clsx("leadPopup-closeButton", "interactive-focus-ring")}
          aria-label={leadPopupContent.closeModalAriaLabel}
        >
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {submitted ? (
          <div className="leadPopup-successShell">
            <div className="leadPopup-successIconWrap">
              <CheckCircle2 className="leadPopup-successIcon" />
            </div>
            <h3 className="leadPopup-title">{leadPopupContent.success.title}</h3>
            <p className="leadPopup-successDescription">
              {leadPopupContent.success.description}
            </p>
          </div>
        ) : (
          <div className="leadPopup-content">
            <div className="leadPopup-header">
              <div className="leadPopup-headerIconWrap">
                <TrendingUp className="leadPopup-headerIcon" />
              </div>
              <h3 className="leadPopup-title">{leadPopupContent.modal.title}</h3>
              <p className="leadPopup-description">
                {leadPopupContent.modal.description}
              </p>
            </div>

            {error && (
              <div className="leadPopup-errorBox">
                <p className="leadPopup-errorText">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <label className="text-sm font-medium text-foreground text-right">{leadPopupContent.fields.firstName}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <label className="text-sm font-medium text-foreground text-right">{leadPopupContent.fields.lastName}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <label className="text-sm font-medium text-foreground text-right">{leadPopupContent.fields.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <label className="text-sm font-medium text-foreground text-right">{leadPopupContent.fields.company}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <label className="text-sm font-medium text-foreground text-right">{leadPopupContent.fields.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] items-start gap-4 py-2">
                <label className="text-sm font-medium text-foreground text-right mt-1.5 flex flex-col justify-start h-full">
                  {leadPopupContent.fields.service}
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  {footer.services.map((s) => (
                    <label key={s.label} className="flex items-center gap-2 text-sm text-foreground cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.service.includes(s.label)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setFormData((prev) => ({
                            ...prev,
                            service: checked
                              ? [...prev.service, s.label]
                              : prev.service.filter((item) => item !== s.label)
                          }));
                        }}
                        className={clsx("leadPopup-checkbox", "interactive-focus-ring")}
                      />
                      <span className="leading-none group-hover:text-primary transition-colors whitespace-nowrap">{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-start gap-4">
                <label className="text-sm font-medium text-foreground text-right mt-3 flex flex-col justify-start h-full">{leadPopupContent.fields.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={clsx("leadPopup-input", "interactive-focus-ring", "min-h-[100px] py-3 resize-y")}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center gap-4 mt-2">
                <div className="col-start-2 flex items-start gap-2 pt-2 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    required
                    className={clsx("leadPopup-checkbox", "interactive-focus-ring")}
                  />
                  <span>
                    {leadPopupContent.consentPrefix}{" "}
                    <a
                      href={leadPopupContent.privacyPolicyHref}
                      className="leadPopup-privacyLink"
                    >
                      {leadPopupContent.privacyPolicyLabel}
                    </a>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] items-center gap-4 mt-4">
                <div className="col-start-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={clsx("leadPopup-submitButton", "interactive-focus-ring")}
                  >
                    {loading
                      ? leadPopupContent.submittingLabel
                      : leadPopupContent.submitLabel}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
