"use client";

import { Send } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import type { Location } from "@/interface/home";

// const geoUrl = "/world-110m.json"; // TopoJSON world map in public folder

// List of locations
const locations: Location[] = [
  { name: "New Delhi", coordinates: [77.2090, 28.6139] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "London", coordinates: [-0.1276, 51.5072] },
];

export default function GlobalFootprint() {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Left Text */}
          <div className="md:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Global Reach, Local Touch
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              Serving businesses across continents with personalized advisory
            </p>
            {/* <button className="mt-6 px-5 py-2 bg-green-600 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
              View more details
            </button> */}

            <p className="font-semibold mb-2">
              Ready to scale globally?
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Let’s start building your international success story.
            </p>
            <button
              type="submit"
              className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              Contact us
            </button>
          </div>

          {/* SVG Map */}
          <div className="md:w-2/3 h-96">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 220 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#334155"
                      stroke="#475569"
                      strokeWidth={0.5}
                    />
                  ))
                }
              </Geographies>

              {locations.map((loc) => (
                <Marker key={loc.name} coordinates={loc.coordinates}>
                  <circle r={5} fill="red" stroke="#fff" strokeWidth={1} />
                </Marker>
              ))}
            </ComposableMap>
          </div>

        </div>

        {/* Stats Section */}
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
