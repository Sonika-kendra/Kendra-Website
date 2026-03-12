"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, ChevronDown, TrendingUp } from "lucide-react";
import type { LeadPopUpProps } from "@/interface/common";
import { leadPopupContent } from "@/config/common";
import { footer } from "@/config/site";

export default function LeadPopUp({ open, onClose }: LeadPopUpProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const selectAllRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: [] as string[],
    message: "",
  });
  const serviceLabels = footer.services.map((service) => service.label);
  const allServicesSelected =
    serviceLabels.length > 0 && formData.service.length === serviceLabels.length;
  const someServicesSelected =
    formData.service.length > 0 && !allServicesSelected;

  useEffect(() => {
    if (!serviceDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setServiceDropdownOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServiceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [serviceDropdownOpen]);

  useEffect(() => {
    if (!open) {
      setServiceDropdownOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someServicesSelected;
    }
  }, [someServicesSelected]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      service: checked
        ? [...prev.service, service]
        : prev.service.filter((item) => item !== service),
    }));
  };

  const handleSelectAllServices = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      service: checked ? serviceLabels : [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError(leadPopupContent.requiredFieldsError);
      return;
    }
    if (!consentAccepted) {
      setError(leadPopupContent.consentRequiredError);
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
        setServiceDropdownOpen(false);
        setConsentAccepted(false);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: [] as string[], message: "" }); // Changed to array
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : leadPopupContent.fallbackError);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null; // hide when closed

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

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid grid-cols-1 gap-1">
                <label className="text-sm font-medium text-foreground">{leadPopupContent.fields.firstName}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-1 gap-1">
                <label className="text-sm font-medium text-foreground">{leadPopupContent.fields.lastName}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-1 gap-1">
                <label className="text-sm font-medium text-foreground">{leadPopupContent.fields.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-1 gap-1 py-0.5">
                <label className="text-sm font-medium text-foreground">
                  {leadPopupContent.fields.service}
                </label>
                <div ref={serviceDropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen((prev) => !prev)}
                    aria-expanded={serviceDropdownOpen}
                    aria-haspopup="listbox"
                    className={clsx(
                      "leadPopup-input",
                      "interactive-focus-ring",
                      "flex min-h-[38px] items-start justify-between gap-2 text-left"
                    )}
                  >
                    <span
                      className={clsx(
                        "flex-1 whitespace-normal break-words pr-1 leading-snug",
                        formData.service.length === 0 && "text-muted-foreground"
                      )}
                    >
                      {formData.service.length > 0
                        ? formData.service.join(", ")
                        : leadPopupContent.fields.service}
                    </span>
                    <ChevronDown
                      className={clsx(
                        "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                        serviceDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {serviceDropdownOpen && (
                    <div
                      className="absolute left-0 right-0 z-20 mt-2 max-h-56 overflow-y-auto rounded-lg border border-input bg-card p-2 shadow-lg"
                      role="listbox"
                      aria-label={leadPopupContent.fields.service}
                    >
                      <label className="mb-1 flex cursor-pointer items-center gap-2 rounded-md border-b border-border px-2 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                        <input
                          ref={selectAllRef}
                          type="checkbox"
                          checked={allServicesSelected}
                          onChange={(e) => handleSelectAllServices(e.target.checked)}
                          className={clsx("leadPopup-checkbox", "interactive-focus-ring")}
                        />
                        <span>Select All</span>
                      </label>
                      {footer.services.map((s) => (
                        <label
                          key={s.label}
                          className="flex cursor-pointer items-start gap-2 rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
                        >
                          <input
                            type="checkbox"
                            checked={formData.service.includes(s.label)}
                            onChange={(e) => handleServiceToggle(s.label, e.target.checked)}
                            className={clsx("leadPopup-checkbox", "interactive-focus-ring")}
                          />
                          <span className="whitespace-normal break-words leading-snug">{s.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                <label className="text-sm font-medium text-foreground">{leadPopupContent.fields.company}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-1 gap-1">
                <label className="text-sm font-medium text-foreground">{leadPopupContent.fields.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={clsx("leadPopup-input", "interactive-focus-ring")}
                />
              </div>

              <div className="grid grid-cols-1 gap-1">
                <label className="text-sm font-medium text-foreground">{leadPopupContent.fields.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={clsx("leadPopup-input", "interactive-focus-ring", "min-h-[72px] py-2 resize-y")}
                />
              </div>

              <div className="grid grid-cols-1 gap-1">
                <label htmlFor="lead-popup-consent" className="leadPopup-consent">
                  <input
                    id="lead-popup-consent"
                    type="checkbox"
                    checked={consentAccepted}
                    onChange={(e) => {
                      setConsentAccepted(e.target.checked);
                      setError("");
                    }}
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
                </label>
              </div>

              <div className="grid grid-cols-1 gap-1">
                <div>
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
