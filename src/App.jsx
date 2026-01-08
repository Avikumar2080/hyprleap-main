import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ServicesGrid from "./components/ServicesGrid";
import IndustryPractice from "./components/IndustryPractice";
import TrustedBy from "./components/TrustedBy";
import Recruiting from "./components/Recruiting";
import LeadershipTeam from "./components/LeadershipTeam";
import PartnersGrid from "./components/PartnersGrid";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

import Openings from "./pages/Openings";

export default function App() {
  return (
    <Router>
      <Header />

      <div className="h-20" />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSlider />
              <AboutSection />
              <ServicesGrid />
              <IndustryPractice />
              {/* <Recruiting /> */}
              <LeadershipTeam />
              <PartnersGrid />
              <TrustedBy />
              <GetInTouch />
            </main>
          }
        />
        <Route path="/openings" element={<Openings />} />
      </Routes>

      <Footer />
    </Router>
  );
}
