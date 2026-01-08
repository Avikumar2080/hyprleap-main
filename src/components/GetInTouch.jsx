import React from "react";
import worldMap from "../assets/world-map.svg";

/**
 * NOTE:
 * Positions are slightly adjusted for visual clarity
 * (design > strict geography)
 */
// const latLngToPercent = (lat, lng) => {
//   const x = (lng + 180) / 360 * 100;
//   const y = (90 - lat) / 180 * 100;
//   return { top: `${y}%`, left: `${x}%` };
// };

const latLngToPercent = (lat, lng) => {
  const left = ((lng + 180) / 360) * 100;
  const top = ((90 - lat) / 180) * 100;
  return { top: `${top}%`, left: `${left}%` };
};


// const locations = [
//   {
//     name: "Delhi – NCR",
//     ...latLngToPercent(28.6139, 77.2090)
//   },
//   {
//     name: "Mumbai",
//     ...latLngToPercent(19.0760, 72.8777)
//   },
//   {
//     name: "Toronto, Canada",
//     ...latLngToPercent(43.6532, -79.3832)
//   },
//   {
//     name: "Dubai",
//     ...latLngToPercent(25.2048, 55.2708)
//   }
// ];
const locations = [
  {
    name: "Delhi – NCR",
    ...latLngToPercent(28.6139, 77.2090)
  },
  {
    name: "Mumbai",
    ...latLngToPercent(19.0760, 72.8777)
  },
  {
    name: "Toronto, Canada",
    // real: 43.6532, -79.3832
    // tiny visual correction so it sits nicely on the landmass
    ...latLngToPercent(44.0, -78.5)
  },
  {
    name: "Dubai",
    ...latLngToPercent(25.2048, 55.2708)
  }
];



const GetInTouch = () => {
  return (
    <section id="contact" className="bg-[#F7F3ED] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: WORLD MAP */}
        <div className="relative map-container">
          <img
            src={worldMap}
            alt="World map"
            className="w-full opacity-70 grayscale scale-[1.05]"
          />

          {locations.map((loc, index) => (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
              style={{ top: loc.top, left: loc.left }}
            >
              {/* Soft halo (creates separation) */}
              <span className="absolute -inset-3 rounded-full bg-[#6BAF2E]/10 blur-md" />

              {/* Pulse ring */}
              <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#6BAF2E]/30 animate-ping" />

              {/* Center dot */}
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#6BAF2E] shadow-md" />

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0B1F33] text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
                {loc.name}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT: CONTENT + CARD */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0B1F33] mb-6">
            Get in touch
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 space-y-8">

            <div>
              <h4 className="font-semibold text-[#0B1F33] mb-1">
                India – NCR
              </h4>
              <p className="text-[#4B5A6A]">
                Gurugram / New Delhi
              </p>
              <a
                href="mailto:contact@hyprleap.in"
                className="text-[#6BAF2E] hover:underline mt-1 inline-block"
              >
                contact@hyprleap.in
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-[#0B1F33] mb-1">
                Canada – Toronto
              </h4>
              <p className="text-[#4B5A6A]">
                Toronto, Ontario
              </p>
              <a
                href="mailto:info@hyprleap.ca"
                className="text-[#6BAF2E] hover:underline mt-1 inline-block"
              >
                info@hyprleap.ca
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
