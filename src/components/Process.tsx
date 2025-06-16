
import React from 'react';
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Lead Discovery",
    description: "We start by understanding your ideal customer profile and target market. Our team analyzes your industry, competitors, and market opportunities to identify the highest-quality prospects for your business.",
  },
  {
    id: "process-2",
    title: "Multi-Channel Outreach",
    description: "Using advanced lead generation strategies across LinkedIn, email, and other channels, we reach out to qualified prospects with personalized messaging that resonates with their specific needs and pain points.",
  },
  {
    id: "process-3",
    title: "Lead Qualification",
    description: "Every lead goes through our rigorous qualification process. We verify contact information, assess buying intent, and ensure each prospect meets your criteria before scheduling any meetings.",
  },
  {
    id: "process-4",
    title: "Calendar Integration",
    description: "Qualified leads are seamlessly scheduled into your calendar using our automated booking system. We handle all the coordination, sending confirmations and reminders to ensure high show-up rates.",
  },
  {
    id: "process-5",
    title: "Continuous Optimization",
    description: "We constantly monitor performance metrics and optimize our approach based on conversion rates, feedback, and market changes. Our process evolves to deliver increasingly better results for your business.",
  },
];

const Process = () => {
  return (
    <section className="w-full pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Desktop/Tablet Layout - Two Columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-2 sticky top-24 h-fit z-20">
            <h5 className="text-xs uppercase tracking-wide text-muted-foreground">Our Process</h5>
            <h2 className="mb-6 mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              How we fill your{" "}
              <span className="text-primary">calendar with qualified leads</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Our proven 5-step process ensures you get a steady stream of high-quality leads 
              that are ready to convert. From discovery to delivery, we handle everything 
              so you can focus on closing deals.
            </p>
          </div>

          {/* Right Column - Animated Cards */}
          <div className="lg:col-span-3 relative">
            <ContainerScroll className="min-h-[200vh] space-y-8 py-32">
              {PROCESS_PHASES.map((phase, index) => (
                <CardSticky
                  key={phase.id}
                  index={index + 1}
                  incrementY={20}
                  incrementZ={8}
                  className="rounded-xl border border-border p-6 lg:p-8 shadow-lg backdrop-blur-md bg-card/95 z-10"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tighter text-foreground flex-1">
                      {phase.title}
                    </h3>
                    <span className="text-lg lg:text-xl xl:text-2xl font-bold text-primary flex-shrink-0 bg-primary/10 rounded-full w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base xl:text-lg text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden">
          {/* Mobile Header - Sticky */}
          <div className="sticky top-20 bg-background/95 backdrop-blur-md border-b border-border/50 pb-6 mb-8 z-30">
            <h5 className="text-xs uppercase tracking-wide text-muted-foreground">Our Process</h5>
            <h2 className="mb-4 mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              How we fill your{" "}
              <span className="text-primary">calendar with qualified leads</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our proven 5-step process ensures you get a steady stream of high-quality leads 
              that are ready to convert.
            </p>
          </div>

          {/* Mobile Cards */}
          <div className="relative">
            <ContainerScroll className="min-h-[150vh] space-y-6 py-8">
              {PROCESS_PHASES.map((phase, index) => (
                <CardSticky
                  key={phase.id}
                  index={index + 1}
                  incrementY={12}
                  incrementZ={4}
                  className="rounded-xl border border-border p-6 shadow-lg backdrop-blur-md bg-card/95 z-10"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tighter text-foreground flex-1">
                      {phase.title}
                    </h3>
                    <span className="text-lg font-bold text-primary flex-shrink-0 bg-primary/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
