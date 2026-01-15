import { useState } from "react";

import nitinImg from "../assets/NitinSir.png";
import giriImg from "../assets/GiriSundar.png";
import satyajitImg from "../assets/SatyajitSir.png";
import rajShekharImg from "../assets/RajShekharSir.png";
import sumitImg from "../assets/SumitSir.png";
import rajulImg from "../assets/RajulMams.jpg";

const leaders = [
  {
    id: "giri",
    name: "Giri Sunder",
    title: "Partner – FMCG, Food & Africa Practice",
    oneLine:
      "Global FMCG and operations leader with deep Africa and emerging-market experience.",
    email: "giri@hyprleap.com",
    image: giriImg,
    bio: `Giri brings 36 years of leadership across OSI Group, Coca-Cola, and African growth markets, with deep expertise in P&L leadership, supply chain, and multi-country operations.`,
  },
  {
    id: "nitin",
    name: "Nitin Aggarwal",
    title: "Co-Founder & Director – Strategy & Leadership Search",
    oneLine:
      "Board-level CEO/CFO advisor with 20+ years across global financial and industrial organisations.",
    email: "nitin@hyprleap.com",
    image: nitinImg,
    bio: `Nitin is a seasoned CEO/CFO and Board leader with 20+ years of experience across globally respected organisations including Religare, Citigroup, GE–SBI Cards, Delphi Automotive, and Coca-Cola.

He has led complex mandates such as scaling Religare from under $100M to over $1B, raising ₹2,000+ crore, and leading large, regulated enterprises across India and APAC.`,
  },
  {
    id: "sumit",
    name: "Sumit Agrawal",
    title: "Co-Founder",
    oneLine: "Extensive experience in executive search and senior-level recruitment across industries.",
    email: "sumit@hyprleap.com",
    image: sumitImg,
    bio: `He brings extensive experience in middle and senior-level hiring across diverse industries including FMCG, Manufacturing, Healthcare, Energy, and Consulting, with a strong focus on research-driven advisory, talent strategy, and best practices in hiring and retention.`,
    initials: "SA",
  },
  {
    id: "raj",
    name: "Raj Shekhar",
    title: "Partner",
    oneLine: "CHRO with two decades of experience aligning people strategy with business growth and culture.",
    email: "raj.shekhar@hyprleap.com",
    image: rajShekharImg,
    bio: "With over two decades of experience in Human Resources, he currently serves as the Chief Human Resources Officer at Crompton Greaves Consumer Electricals Limited, where he leads HR consulting, talent strategy, and career development initiatives. Previously, as Senior Manager – Employee Relations at Asian Paints, he developed strong expertise in employee relations, negotiations, and engagement. He is passionate about driving organizational growth through strategic talent management, fostering a culture of continuous improvement, and aligning HR practices with business goals rooted in innovation, integrity, and collaboration.",
    initials: "RS",
  },
  {
    id: "satyajit",
    name: "Satyajit Mohanty",
    title: "Co-Founder & Chief Talent Strategist",
    oneLine:
      "Enterprise HR and leadership strategy expert with 25+ years across global multinationals.",
    email: "satyajit@hyprleap.com",
    image: satyajitImg,
    bio: `An XLRI alumnus, Satyajit has led large-scale HR, organisation design, and leadership transformation across India, Europe, and LATAM.`,
  },
  {
    id: "rajul",
    name: "Rajul Agrawal",
    title: "Co-Founder & Global Talent Strategist",
    oneLine: "Leadership advisory and executive search specialist with expertise in research-driven, cross-industry talent solutions.",
    email: "rajul@hyprleap.com",
    image: rajulImg,
    bio: "She brings deep expertise in executive search and leadership advisory, with a strong focus on identifying and placing transformative senior talent across diverse industries. Her strengths lie in research-driven hiring, cultural alignment, and strategic leadership assessment, helping organizations build resilient, future-ready leadership teams in complex and global environments.",
    initials: "RJ",
  }
];

export default function LeadershipTeam() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-light">
      <div className="container-centered">
        <h2 className="text-center mb-4">Leadership</h2>
        <p className="text-center small-text mb-10">
          Our partners bring decades of experience working with global, family-owned,
          and private equity–backed organisations.
        </p>

        {/* GRID */}
        <div className="leadership-grid-fixed">
          {leaders.map((p) => (
            <div
              key={p.id}
              className="leader-card"
              onClick={() => setActive(p)}
            >
              <div className="leader-img">
                {p.image ? (
                  <img src={p.image} alt={p.name} />
                ) : (
                  <span>{p.initials}</span>
                )}
              </div>

              <div className="leader-info">
                <h4>{p.name}</h4>
                <p className="small-text">{p.oneLine}</p>
                <a
                  href={`mailto:${p.email}`}
                  className="email-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {active && (
          <div className="leader-modal" onClick={() => setActive(null)}>
            <div
              className="leader-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="leader-modal-img">
                {active.image ? (
                  <img src={active.image} alt={active.name} />
                ) : (
                  <span>{active.initials}</span>
                )}
              </div>

              <h3>{active.name}</h3>
              <p className="small-text mb-3">{active.title}</p>

              <p className="modal-bio">{active.bio}</p>

              <a href={`mailto:${active.email}`} className="email-link">
                {active.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
