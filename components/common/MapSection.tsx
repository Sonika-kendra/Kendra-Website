"use client"

import React, { useEffect, useRef, useState } from "react"

type Marker = {
  name: string
  x: number
  y: number
}

const markers: Marker[] = [
  { name: "San Francisco", x: 180, y: 220 },
  { name: "Mexico City", x: 230, y: 260 },
  { name: "Miami", x: 300, y: 250 },
  { name: "Ottawa", x: 320, y: 170 },
  { name: "Amsterdam", x: 520, y: 180 },
  { name: "Berlin", x: 550, y: 180 },
  { name: "Casablanca", x: 500, y: 240 },
  { name: "Riyadh", x: 630, y: 260 },
  { name: "Beijing", x: 800, y: 200 },
  { name: "Tokyo", x: 860, y: 220 },
  { name: "Singapore", x: 800, y: 320 },
]

export default function MapSection() {
  const svgRef = useRef<SVGSVGElement | null>(null)

  const [viewBox, setViewBox] = useState<[number, number, number, number]>([
    0, 0, 1000, 500,
  ])

  const isDragging = useRef(false)
  const start = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  /* ---------------- AUTO CENTER ---------------- */

  useEffect(() => {
    if (!markers.length) return

    const xs = markers.map((m) => m.x)
    const ys = markers.map((m) => m.y)

    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)

    const padding = 200

    const width = maxX - minX + padding
    const height = maxY - minY + padding

    setViewBox([
      minX - padding / 2,
      minY - padding / 2,
      width,
      height,
    ])
  }, [])

  /* ---------------- ZOOM ---------------- */

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()

    const zoomFactor = 0.1
    const [x, y, w, h] = viewBox

    const direction = e.deltaY > 0 ? 1 : -1
    const newWidth = w + w * zoomFactor * direction
    const newHeight = h + h * zoomFactor * direction

    setViewBox([x, y, newWidth, newHeight])
  }

  /* ---------------- PAN ---------------- */

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    start.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return

    const dx = e.clientX - start.current.x
    const dy = e.clientY - start.current.y

    const [x, y, w, h] = viewBox

    setViewBox([x - dx, y - dy, w, h])

    start.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  return (
    <section className="relative w-full bg-[#071426] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Global Renewable Impact
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Shinery is a leader in offshore wind farms across Europe, with over
            30 years of experience. Our company has 102 GW installed and 81 GW
            under construction.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-semibold">
            View more details
          </button>
        </div>

        {/* RIGHT MAP */}
        <div className="h-[500px] w-full">
          <svg
            ref={svgRef}
            viewBox={viewBox.join(" ")}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Animation */}
            <defs>
              <style>
                {`
                  .pulse {
                    transform-origin: center;
                    animation: pulse 2s infinite;
                  }

                  @keyframes pulse {
                    0% { r: 4; opacity: 1; }
                    70% { r: 16; opacity: 0; }
                    100% { r: 4; opacity: 0; }
                  }
                `}
              </style>
            </defs>

            {/* Background */}
            <rect
              x="0"
              y="0"
              width="1000"
              height="500"
              fill="#0b1d35"
            />

            {/* MARKERS */}
            {markers.map((m, i) => (
              <g key={i}>
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="4"
                  fill="#ff2d2d"
                />

                <circle
                  cx={m.x}
                  cy={m.y}
                  r="4"
                  fill="#ff2d2d"
                  className="pulse"
                />

                <text
                  x={m.x}
                  y={m.y - 12}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                >
                  {m.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold">10,000+</h3>
          <p className="text-gray-400 mt-2">Solar Systems Installed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-400 mt-2">Countries Served</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">5M</h3>
          <p className="text-gray-400 mt-2">Tons of CO₂ Offset</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-gray-400 mt-2">Years of Innovating</p>
        </div>
      </div>
    </section>
  )
}
