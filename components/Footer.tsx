// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-brand.navy text-slate-300 py-10 bg-black">
      <div className="container grid md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-white text-lg mb-4">
            Kendra International
          </h4>
          <p className="text-sm">
            M&A and business consulting advisory firm.
          </p>
        </div>

        <div>
          <h5 className="text-white mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Mergers & Acquisitions</li>
            <li>Business Consulting</li>
            <li>Cost Rationalization</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white mb-4">Contact</h5>
          <p className="text-sm">United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
