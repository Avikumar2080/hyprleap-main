import { useState } from "react";

const INDUSTRIES = [
  {
    title: "FMCG and beverages",
    description:
      "We support end-to-end hiring for sales, manufacturing and support roles for large FMCG and beverages organisations. This includes greenfield projects, capacity expansion and route-to-market changes across multiple states and distribution networks.",
  },
  {
    title: "Manufacturing and engineering",
    description:
      "We work with process and discrete manufacturing businesses that need strong plant, maintenance, quality, EHS and supply chain capabilities. Our experience covers building teams for new plants, upgrading existing operations and strengthening leadership at site and regional levels.",
  },
  {
    title: "Healthcare and life sciences",
    description:
      "Our partners bring HR and business experience from healthcare delivery and health insurance. We understand the mix of clinical and non-clinical roles, regulatory expectations and the importance of disciplined people decisions.",
  },
  {
    title: "Retail, distribution and consumer services",
    description:
      "We support roles across frontline sales, key account management, distribution operations and customer experience – both offline and online. The focus is on teams that execute consistently and protect the brand at every touchpoint.",
  },
  {
    title: "Emerging tech and green industries",
    description:
      "We partner with technology-led and sustainability-focused organisations across renewable energy, mobility, and digital platforms where talent quality directly impacts scalability and execution.",
  },
];

export default function IndustryPractice() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  return (
    <section id = "sectors"className="section-light">
      <div className="container-centered industry-section">
        <div className="industry-container">
          {/* LEFT */}
          <div className="industry-left">
            <h2>Industry practice</h2>
            <p>
              We are most effective where we know the ground well. Our partners
              have worked in and around the following sectors and bring that
              knowledge into every conversation.
            </p>
          </div>

          {/* RIGHT */}
          <div className="industry-right">
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.title}
                className="industry-link"
                onClick={() => setActiveIndustry(industry)}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeIndustry && (
        <div
          className="modal-overlay"
          onClick={() => setActiveIndustry(null)}
        >
          <div
            className="overlay-card modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveIndustry(null)}
            >
              ×
            </button>

            <h3>{activeIndustry.title}</h3>
            <p>{activeIndustry.description}</p>

            <button className="primary-btn">Talk to us</button>
          </div>
        </div>
      )}
    </section>
  );
}
