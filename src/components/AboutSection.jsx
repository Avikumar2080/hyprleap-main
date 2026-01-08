import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="section-light py-24">
      <div className="container-centered max-w-3xl">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Who we are
        </h2>

        <p className="mt-6 text-slate-600 leading-relaxed">
          HyperLeap is a specialist executive search and talent solutions firm
          founded by senior HR and business leaders with deep experience across
          multinational, family-owned, and private equity–backed organisations.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          With offices in NCR, Geneva and Toronto, we partner with businesses navigating
          growth, transformation, and new market entry to build leadership and
          teams that deliver long-term value.
        </p>
      </div>
    </section>
  );
}
