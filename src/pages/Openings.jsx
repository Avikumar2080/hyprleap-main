import React, { useState } from "react";
import { jobs } from "../data/jobs";

export default function Openings() {
  const [activeJob, setActiveJob] = useState(null);

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container-centered">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Current Openings
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl">
          Explore current leadership and specialist opportunities we are hiring
          for across industries and functions.
        </p>

        {/* Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Job Title
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Apply
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  LinkedIn
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setActiveJob(job)}
                      className="text-[var(--brand-green)] font-medium hover:underline"
                    >
                      {job.title}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={job.applyLink}
                      className="text-slate-700 hover:underline"
                    >
                      Apply →
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={job.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:underline"
                    >
                      View post →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* JD Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl p-8 relative shadow-xl">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-extrabold text-slate-900">
              {activeJob.title}
            </h2>

            <p className="mt-4 text-slate-600">
              {activeJob.description.summary}
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900">
                Key Responsibilities
              </h4>
              <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                {activeJob.description.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900">
                Requirements
              </h4>
              <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                {activeJob.description.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={activeJob.applyLink}
                className="inline-block px-6 py-3 rounded-md bg-[var(--brand-green)] text-white font-medium hover:opacity-90"
              >
                Apply for this role
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
