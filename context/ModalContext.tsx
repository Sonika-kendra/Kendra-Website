"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import LeadPopUp from "@/components/common/LeadPopup";

type ModalContextType = {
  openLeadPopUp: () => void;
  closeLeadPopUp: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openLeadPopUp = () => setOpen(true);
  const closeLeadPopUp = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ openLeadPopUp, closeLeadPopUp }}>
      {children}

      {/* Global modal */}
      <LeadPopUp open={open} onClose={closeLeadPopUp} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
}
