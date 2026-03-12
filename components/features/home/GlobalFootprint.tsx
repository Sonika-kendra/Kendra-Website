"use client";

import { Send } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { globalFootprintContent } from "@/config/pages/home";

export default function GlobalFootprint() {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Left Text */}
          <div className="md:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {globalFootprintContent.title}
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              {globalFootprintContent.description}
            </p>

            <p className="font-semibold mb-2">{globalFootprintContent.ctaTitle}</p>
            <p className="text-sm text-slate-400 mb-4">
              {globalFootprintContent.ctaDescription}
            </p>
            <button
              type="submit"
              className="btn-hero w-full gap-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {globalFootprintContent.ctaButtonLabel}
            </button>
          </div>

          {/* SVG Map */}
          <div className="md:w-2/3 h-96">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 220 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={globalFootprintContent.mapGeoUrl}>
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

              {globalFootprintContent.locations.map((location) => (
                <Marker key={location.name} coordinates={location.coordinates}>
                  <circle r={5} fill="red" stroke="#fff" strokeWidth={1} />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {globalFootprintContent.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
