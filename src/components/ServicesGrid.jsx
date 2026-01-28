import { useState } from "react";

import largeProjectImg from "../assets/large-project.jpg";
import globalTalentImg from "../assets/global-talent.jpg";
import emergingSectorsImg from "../assets/emerging-sectors.jpg";
import msmeSolutionsImg from "../assets/msme-solutions.jpg";

const services = [
  {
    title: "Large-scale project hiring",
    desc:
      "Turnkey hiring programs for greenfield projects and rapid scale-ups.",
    image: largeProjectImg,
    modalText:
      "We design and execute end-to-end hiring programs for large-scale projects, including new plant setups, greenfield operations, and rapid workforce expansions. Our approach combines workforce planning, leadership hiring, volume recruitment, and deployment governance to ensure speed without compromising quality.",
  },
  {
    title: "Global talent movement",
    desc:
      "Practical cross-border leadership and specialist hiring.",
    image: globalTalentImg,
    modalText:
      "We support organisations with cross-border leadership movement, expatriate hiring, and specialist talent acquisition for international operations, ensuring alignment with regulatory, cultural, and business requirements.",
  },
  {
    title: "Emerging sectors",
    desc:
      "Talent strategies for technology-led and evolving businesses.",
    image: emergingSectorsImg,
    modalText:
      "We partner with organisations operating in emerging and future-facing sectors, supporting leadership and specialist hiring for technology-driven, renewable energy, and innovation-led businesses.",
  },
  {
    title: "MSME solutions",
    desc:
      "Enterprise thinking for small and mid-sized businesses.",
    image: msmeSolutionsImg,
    modalText:
      "We work closely with founders and leadership teams of growing businesses to build strong functional and leadership capability that supports sustainable scale and operational excellence.",
  },
];

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState(null);

const handleServiceClick = (service) => {
  if (activeService?.title === service.title) {
    setActiveService(null); // close if same card clicked
  } else {
    setActiveService(service); // open
  }
};

  return (
    <section id = "services"className="section-alt py-20">
      <div className="container-centered">
        <h2 className="mb-12">What we solve best</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
            key={index}
            className="
              card
              cursor-pointer
              transition-transform transition-shadow
              duration-200
              ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-2
              hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]
            "
            onClick={() => handleServiceClick(service)}
          >
              {/* IMAGE (clickable) */}
              
              <div className="card-image cursor-pointer overflow-hidden" >
  <img
    src={service.image}
    alt={service.title}
    className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
  />
</div>


              <div className="p-6">
                <h4 className="mb-3">{service.title}</h4>

                <p className="mb-4">{service.desc}</p>

                <button
                  className="text-[var(--brand-green)] font-medium"
                  onClick={() => handleServiceClick(service)}
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeService && (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
        onClick={() => setActiveService(null)}
      >
          <div className="overlay-card max-w-2xl w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 text-2xl"
            >
              ×
            </button>

            {/* Expanded image – same ratio, cropped */}
            <div className="mb-6 rounded-xl overflow-hidden h-[280px]">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mb-4">{activeService.title}</h3>

            <p className="mb-6">{activeService.modalText}</p>

            <button className="primary-btn">Talk to us</button>
          </div>
        </div>
      )}
    </section>
  );
}
