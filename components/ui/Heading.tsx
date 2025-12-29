export default function Heading({
  level = 2,
  children,
}: {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  const Tag = `h${level}` as any;
  const styles = {
    1: "text-6xl font-semibold",
    2: "text-4xl font-semibold",
    3: "text-2xl font-semibold",
  };
  return <Tag className={styles[level]}>{children}</Tag>;
}
