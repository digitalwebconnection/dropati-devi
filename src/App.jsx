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
        <Navbar onOpenInterest={openInterest} />

        {/* Above-the-fold critical content */}
        <HeroSection />
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
