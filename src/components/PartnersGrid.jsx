import React from "react";

/**
 * Add real client logos later as:
 * { name: "Client Name", src: "/path/to/logo.svg" }
 * Keep this array empty until you have permission to display logos.
 */
const partners = [];

export default function PartnersGrid() {
  // If no logos yet, hide the section entirely (intentional, not broken)
  if (!partners.length) return null;

  return (
    <section id="partners" className="section-light py-24">
      <div className="container-centered">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">
            Partners
          </h3>
          <p className="mt-4 text-slate-600">
            Organisations we have partnered with across leadership and talent
            engagements.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center border rounded-lg p-6 bg-white"
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-10 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
