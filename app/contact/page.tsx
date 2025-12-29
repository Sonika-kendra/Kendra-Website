export default function ContactPage() {
  return (
    <section className="py-32">
      <div className="max-w-[720px] mx-auto px-6">
        <h1 className="text-5xl font-semibold">
          Contact Our Advisors
        </h1>

        <p className="mt-6 text-slate-600">
          Tell us about your strategic priorities. Our team will respond
          promptly.
        </p>

        <form className="mt-12 space-y-6">
          <input
            placeholder="Full Name"
            className="w-full border p-4 rounded"
          />
          <input
            placeholder="Email Address"
            className="w-full border p-4 rounded"
          />
          <textarea
            placeholder="How can we help?"
            className="w-full border p-4 rounded h-40"
          />
          <button className="px-8 py-4 bg-accent text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
