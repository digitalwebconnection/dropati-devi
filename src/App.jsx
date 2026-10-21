import React, { useState, lazy, Suspense } from "react";
import { Navbar, Footer } from "@/components/layout";
import { HeroSection, StorySection } from "@/components/sections";
import { ErrorBoundary } from "@/components/common";
import { useAos } from "@/hooks";

// Code-split below-the-fold interactive sections to minimize initial JS bundle
const MomentsSection = lazy(() => import("@/components/sections/MomentsSection"));
const PurposeSection = lazy(() => import("@/components/sections/PurposeSection"));
const ProgrammesSection = lazy(() => import("@/components/sections/ProgrammesSection"));
const HelpSection = lazy(() => import("@/components/sections/HelpSection"));
const ValuesSection = lazy(() => import("@/components/sections/ValuesSection"));
const InvolvedSection = lazy(() => import("@/components/sections/InvolvedSection"));
const ClosingSection = lazy(() => import("@/components/sections/ClosingSection"));
const InterestModal = lazy(() => import("@/components/modals/InterestModal"));

function SectionFallback({ minHeight = "min-h-[360px]" }) {
  return (
    <div
      className={`w-full ${minHeight} bg-sand/40 animate-pulse flex items-center justify-center`}
      aria-hidden="true"
    />
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  useAos();

  const openInterest = () => setModalOpen(true);
  const closeInterest = () => setModalOpen(false);

  return (
    <ErrorBoundary>
      <main id="top" className="relative min-h-screen bg-bone">
        {/* Accessible Skip Link for Keyboard & Screen Reader Users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#01236A] focus:text-[#FFD900] focus:font-bold focus:rounded-sm focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
        >
          Skip to main content
        </a>

        <Navbar onOpenInterest={openInterest} />

        {/* Above-the-fold critical content */}
        <div id="main-content">
          <HeroSection />
        </div>
        <StorySection />

        {/* Below-the-fold lazy-loaded sections with isolated error containment */}
        <ErrorBoundary>
          <Suspense fallback={<SectionFallback minHeight="min-h-[500px]" />}>
            <MomentsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <PurposeSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback minHeight="min-h-[600px]" />}>
            <ProgrammesSection onOpenInterest={openInterest} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <HelpSection onOpenInterest={openInterest} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback minHeight="min-h-[500px]" />}>
            <ValuesSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <InvolvedSection onOpenInterest={openInterest} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <ClosingSection onOpenInterest={openInterest} />
          </Suspense>
        </ErrorBoundary>

        <Footer />

        {/* On-demand lazy-loaded modal */}
        {modalOpen && (
          <ErrorBoundary>
            <Suspense fallback={null}>
              <InterestModal isOpen={modalOpen} onClose={closeInterest} />
            </Suspense>
          </ErrorBoundary>
        )}
      </main>
    </ErrorBoundary>
  );
}

export default App;
