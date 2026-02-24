import type { ReactNode } from "react";

export interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
}

export interface LeadPopUpProps {
  open: boolean;
  onClose: () => void;
}
