import { SVGProps } from "react";

export default function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
    </svg>
  );
}
