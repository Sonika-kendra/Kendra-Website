export default function ServiceGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((i) => (
          <li key={i} className="border-b pb-4">{i}</li>
        ))}
      </ul>
    </div>
  );
}
