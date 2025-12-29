type Props = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
};

export default function Button({
  variant = "primary",
  children,
  href,
}: Props) {
  const base =
    "px-7 py-3 rounded-md font-medium transition duration-200";

  const styles = {
    primary:
      "bg-accent text-white hover:bg-primary",
    secondary:
      "border border-accent text-accent hover:bg-accent hover:text-white",
  };

  const cls = `${base} ${styles[variant]}`;

  return href ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <button className={cls}>{children}</button>
  );
}
