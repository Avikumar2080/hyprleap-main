import React from "react";
import heroImg from "../assets/hero-img.jpg";

export default function HeroSlider() {
  return (
    <section id = "home" className="hero-wrapper py-24">
      <div className="container-centered grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: IMAGE */}
        <div className="hero-letterbox overflow-hidden">
          <img
            src={heroImg}
            alt="City skyline representing business scale and growth"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div>
          <h1>
            Consultative Offering & talent solutions
            <br />
            for scaling businesses
          </h1>

          <p className="mt-6 max-w-xl">
            We partner with organisations navigating growth, transformation,
            and new market entry to build leadership and teams that deliver
            long-term value.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-[var(--brand-green)] text-white font-medium hover:opacity-90"
            >
              Talk to us
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              What we do
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
