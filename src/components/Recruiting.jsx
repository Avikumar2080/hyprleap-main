import React from "react";
import { Link } from "react-router-dom";

export default function Recruiting() {
  return (
    <section id="recruiting" className="section-gradient py-24">
      <div className="container-centered max-w-4xl">
        <h3 className="text-3xl font-extrabold text-slate-900">
          Recruiting
        </h3>

        <p className="mt-6 text-slate-600 leading-relaxed">
          We deliver retained executive search and project-based hiring solutions
          aligned to business priorities, timelines, and outcomes.
        </p>

        <div className="mt-8">
          <Link
            to="/openings"
            className="inline-block px-6 py-3 rounded-md bg-[var(--brand-green)] text-white font-medium hover:opacity-90"
          >
            View current openings
          </Link>
        </div>
      </div>
    </section>
  );
}
