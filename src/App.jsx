/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import HeroSection from "./components/sections/HeroSection";
import StorySection from "./components/sections/StorySection";
import MomentsSection from "./components/sections/MomentsSection";
import PurposeSection from "./components/sections/PurposeSection";
import ProgrammesSection from "./components/sections/ProgrammesSection";
import HelpSection from "./components/sections/HelpSection";
import ValuesSection from "./components/sections/ValuesSection";
import InvolvedSection from "./components/sections/InvolvedSection";
import ClosingSection from "./components/sections/ClosingSection";

// Modal Component
import InterestModal from "./components/modals/InterestModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      offset: 60,
      delay: 50,
    });
    AOS.refresh();
  }, []);

  const openInterest = () => setModalOpen(true);
  const closeInterest = () => setModalOpen(false);

  return (
    <main>
      <Navbar onOpenInterest={openInterest} />
      <HeroSection />
      <StorySection />
      <MomentsSection />
      <PurposeSection />
      <ProgrammesSection onOpenInterest={openInterest} />
      <HelpSection onOpenInterest={openInterest} />
      <ValuesSection />
      <InvolvedSection onOpenInterest={openInterest} />
      <ClosingSection onOpenInterest={openInterest} />
      <Footer />

      <InterestModal isOpen={modalOpen} onClose={closeInterest} />
    </main>
  );
}

export default App;
