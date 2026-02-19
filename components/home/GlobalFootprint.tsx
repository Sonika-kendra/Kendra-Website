"use client";

import { MapPin } from "lucide-react";

export default function GlobalFootprint() {
  const locations = [
    { name: "Ottawa", x: 22, y: 25 },
    { name: "San Francisco", x: 10, y: 30 },
    { name: "Miami", x: 15, y: 40 },
    { name: "Mexico City", x: 13, y: 45 },
    { name: "Amsterdam", x: 50, y: 20 },
    { name: "Berlin", x: 55, y: 25 },
    { name: "Casablanca", x: 45, y: 35 },
    { name: "Riyadh", x: 65, y: 35 },
    { name: "Beijing", x: 85, y: 25 },
    { name: "Tokyo", x: 95, y: 25 },
    { name: "Singapore", x: 90, y: 50 },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Left Text */}
          <div className="md:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Global Footprint</h2>
            <p className="text-slate-300">
              Shinery is a leader in offshore wind farms across Europe, with over 30 years of experience.
              Our company has 102 GW installed and 81 GW under construction.
            </p>
            <button className="mt-6 px-5 py-2 bg-green-600 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
              View more details
            </button>
          </div>

          {/* Map */}
          <div className="relative md:w-2/3 h-96 rounded-xl overflow-hidden">
            <img
              src="/globalFootPrint/world.svg"
              alt="World Map"
              className="w-full h-full object-cover"
            />
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                title={loc.name}
              >
                <MapPin className="h-6 w-6 text-red-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Optional Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold">10,000+</p>
            <p className="text-sm text-slate-300">Solar Systems Installed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm text-slate-300">Countries Served</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5M</p>
            <p className="text-sm text-slate-300">Tons of CO2 Offset</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm text-slate-300">Years of Innovating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
