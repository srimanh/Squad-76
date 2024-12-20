import React from "react";
import HeroSection from "../components/HeroSection";
import Members from "../components/Members";
import News from "../components/News";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <Members />
      <News />
      <Gallery />
      <Projects />
    </>
  );
}

export default LandingPage;
