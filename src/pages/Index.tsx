
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import { Features as NewFeatures } from '@/components/ui/features-8';
import { Features as AdvancedFeatures } from '@/components/ui/features-10';
import Process from '@/components/Process';
import ClosedDealsSection from '@/components/ClosedDealsSection';
import StackingCardsSection from '@/components/StackingCardsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <NewFeatures />
        <Process />
        <ClosedDealsSection />
        <StackingCardsSection />
        <AdvancedFeatures />
        <div id="case-studies">
          <CaseStudiesSection />
        </div>
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
