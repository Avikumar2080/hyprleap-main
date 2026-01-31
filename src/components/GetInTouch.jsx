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


const locations = [
  {
    name: "India – Gurgaon",
    // slightly north-east to avoid overlap with Mumbai
    ...latLngToPercent(29.0, 77.5)
  },
  {
    name: "India – Mumbai",
    // slightly south-west to emphasize west coast
    ...latLngToPercent(18.6, 72.6)
  },
  {
    name: "Germany – Eschborn",
    ...latLngToPercent(50.1433, 8.5717)
  },
  {
    name: "Canada – Mississauga",
    // tiny visual correction for SVG landmass
    ...latLngToPercent(43.8, -79.2)
  }
];




const GetInTouch = () => {
  return (
    <section id="contact" className="bg-[#F7F3ED] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: MAP */}
        <div className="relative scale-[1.08]">
          <img
            src={worldMap}
            alt="World map"
            className="w-full opacity-70 grayscale"
          />

          {locations.map((loc, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: loc.top, left: loc.left }}
            >
              {/* glow */}
              <span className="absolute -inset-3 rounded-full bg-[#6BAF2E]/20 blur-md" />
              {/* dot */}
              <span className="relative block h-3.5 w-3.5 rounded-full bg-[#6BAF2E]" />

              {/* tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
                bg-[#0B1F33] text-white text-xs px-3 py-1.5 rounded-md
                opacity-0 group-hover:opacity-100 transition shadow-lg">
                {loc.name}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT: CARD */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0B1F33] mb-6">
            Get in touch
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">

            {/* Our Offices */}
            <h3 className="text-lg font-semibold text-[#0B1F33] mb-6">
              Our offices at
            </h3>

            <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#4B5A6A]">

              {/* INDIA */}
              <div>
                <h4 className="font-semibold text-[#0B1F33] mb-3">
                  India
                </h4>

                <div className="mb-4">
                  <p className="font-medium">Gurgaon</p>
                  <p>18/38, G18 Road</p>
                  <p>DLF Phase 1, Sector 26</p>
                </div>

                <div>
                  <p className="font-medium">Mumbai</p>
                  <p>Canary Building, Flat No. 1005</p>
                  <p>Hiranandani Estate, Thane West</p>
                  <p>Mumbai – 400607</p>
                </div>
              </div>

              {/* INTERNATIONAL */}
              <div>
                <h4 className="font-semibold text-[#0B1F33] mb-3">
                  International
                </h4>

                <div className="mb-4">
                  <p className="font-medium">Germany</p>
                  <p>Hauptstrasse 3b</p>
                  <p>65760 Eschborn</p>
                </div>

                <div>
                  <p className="font-medium">Canada</p>
                  <p>116, 5530 Glen Erin Drive</p>
                  <p>Mississauga</p>
                </div>
              </div>

            </div>

            {/* CONTACT */}
            <div className="border-t mt-8 pt-6">
              <h4 className="font-semibold text-[#0B1F33] mb-2">
                Contact us
              </h4>

              <p>
                Email:{" "}
                <a
                  href="mailto:Satyajit@hyprleap.com"
                  className="text-[#6BAF2E] hover:underline"
                >
                  Satyajit@hyprleap.com
                </a>
              </p>

              <p className="mt-1">
                Phone:{" "}
                <a
                  href="tel:+918800773484"
                  className="text-[#6BAF2E] hover:underline"
                >
                  +91 88007 73484
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;

