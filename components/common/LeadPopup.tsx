"use client";

import { useState } from "react";
import clsx from "clsx";
import { CheckCircle2, TrendingUp } from "lucide-react";
import type { LeadPopUpProps } from "@/interface/common";
import { leadPopupContent } from "@/config/common";
import { ui } from "@/config/theme";

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
  });

  if (!open) return null; // hide when closed

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(leadPopupContent.submissionFailedError);

      setSubmitted(true);

      // reset form and close modal after 2s
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "" });
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
      className={ui.leadPopup.overlay}
      onClick={onClose} // close on overlay click
    >
      <div
        className={ui.leadPopup.panel}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={clsx(ui.leadPopup.closeButton, ui.interactive.focusRing)}
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
          <div className={ui.leadPopup.successShell}>
            <div className={ui.leadPopup.successIconWrap}>
              <CheckCircle2 className={ui.leadPopup.successIcon} />
            </div>
            <h3 className={ui.leadPopup.title}>{leadPopupContent.success.title}</h3>
            <p className={ui.leadPopup.successDescription}>
              {leadPopupContent.success.description}
            </p>
          </div>
        ) : (
          <div className={ui.leadPopup.content}>
            <div className={ui.leadPopup.header}>
              <div className={ui.leadPopup.headerIconWrap}>
                <TrendingUp className={ui.leadPopup.headerIcon} />
              </div>
              <h3 className={ui.leadPopup.title}>{leadPopupContent.modal.title}</h3>
              <p className={ui.leadPopup.description}>
                {leadPopupContent.modal.description}
              </p>
            </div>

            {error && (
              <div className={ui.leadPopup.errorBox}>
                <p className={ui.leadPopup.errorText}>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={ui.leadPopup.form}>
              <div className={ui.leadPopup.nameGrid}>
                <input
                  type="text"
                  name="firstName"
                  placeholder={leadPopupContent.fields.firstName}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className={clsx(ui.leadPopup.input, ui.interactive.focusRing)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={leadPopupContent.fields.lastName}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className={clsx(ui.leadPopup.input, ui.interactive.focusRing)}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder={leadPopupContent.fields.email}
                value={formData.email}
                onChange={handleInputChange}
                required
                className={clsx(ui.leadPopup.input, ui.interactive.focusRing)}
              />

              <input
                type="text"
                name="company"
                placeholder={leadPopupContent.fields.company}
                value={formData.company}
                onChange={handleInputChange}
                className={clsx(ui.leadPopup.input, ui.interactive.focusRing)}
              />

              <input
                type="tel"
                name="phone"
                placeholder={leadPopupContent.fields.phone}
                value={formData.phone}
                onChange={handleInputChange}
                className={clsx(ui.leadPopup.input, ui.interactive.focusRing)}
              />

              <label className={ui.leadPopup.consent}>
                <input
                  type="checkbox"
                  required
                  className={clsx(ui.leadPopup.checkbox, ui.interactive.focusRing)}
                />
                <span>
                  {leadPopupContent.consentPrefix}{" "}
                  <a
                    href={leadPopupContent.privacyPolicyHref}
                    className={ui.leadPopup.privacyLink}
                  >
                    {leadPopupContent.privacyPolicyLabel}
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className={clsx(ui.leadPopup.submitButton, ui.interactive.focusRing)}
              >
                {loading
                  ? leadPopupContent.submittingLabel
                  : leadPopupContent.submitLabel}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
