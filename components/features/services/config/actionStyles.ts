import type {
  ServiceActionConfig,
  ServiceActionVariant,
} from "../interfaces";

const ACTION_CLASS_BY_VARIANT: Record<ServiceActionVariant, string> = {
  hero: "btn-hero",
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export function resolveServiceActionClass(
  action: ServiceActionConfig,
  fallbackVariant: ServiceActionVariant
): string {
  if (action.className) {
    return action.className;
  }

  return ACTION_CLASS_BY_VARIANT[action.variant ?? fallbackVariant];
}
