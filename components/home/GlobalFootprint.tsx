"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "/world-110m.json"; // TopoJSON world map in public folder

// Define location type with exact tuple coordinates
interface Location {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
}

// List of locations
const locations: Location[] = [
  { name: "Ottawa", coordinates: [-75.6972, 45.4215] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  { name: "Mexico City", coordinates: [-99.1332, 19.4326] },
  { name: "Amsterdam", coordinates: [4.9041, 52.3676] },
  { name: "Berlin", coordinates: [13.4050, 52.5200] },
  { name: "Casablanca", coordinates: [-7.5898, 33.5731] },
  { name: "Riyadh", coordinates: [46.6753, 24.7136] },
  { name: "Beijing", coordinates: [116.4074, 39.9042] },
  { name: "Tokyo", coordinates: [139.6503, 35.6762] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
];

export default function GlobalFootprint() {
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

          {/* SVG Map */}
          <div className="md:w-2/3 h-96">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 160 }}
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
