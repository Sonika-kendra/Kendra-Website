export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        <div>
          <h4 className="text-white font-medium">Kendra International</h4>
          <p className="mt-4 text-sm">
            Strategic M&A and business advisory services for critical
            decision-making moments.
          </p>
        </div>

        <div>
          <h5 className="text-white font-medium">Capabilities</h5>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Mergers & Acquisitions</li>
            <li>Business Transformation</li>
            <li>Cost Optimization</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-medium">Contact</h5>
          <p className="mt-4 text-sm">
            advisory@kendra.com <br />
            United Kingdom
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kendra International. All rights reserved.
      </div>
    </footer>
  );
}
