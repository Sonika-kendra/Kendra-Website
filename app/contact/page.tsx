// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-semibold">Contact Us</h1>

      <form className="mt-8 grid gap-4">
        <input
          className="border rounded-xl px-4 py-3"
          placeholder="Name"
        />
        <input
          className="border rounded-xl px-4 py-3"
          placeholder="Email"
        />
        <textarea
          className="border rounded-xl px-4 py-3"
          placeholder="Message"
        />
        <button className="bg-brand.accent py-3 rounded-xl font-medium">
          Send Message
        </button>
      </form>
    </section>
  );
}
