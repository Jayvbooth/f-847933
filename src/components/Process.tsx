
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
    <section className="w-full py-12 md:py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header section - always visible */}
        <div className="mb-8 md:mb-12">
          <h5 className="text-xs uppercase tracking-wide text-muted-foreground">Our Process</h5>
          <h2 className="mb-6 mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How we fill your{" "}
            <span className="text-primary">calendar with qualified leads</span>
          </h2>
          <p className="max-w-3xl text-base md:text-lg text-muted-foreground">
            Our proven 5-step process ensures you get a steady stream of high-quality leads 
            that are ready to convert. From discovery to delivery, we handle everything 
            so you can focus on closing deals.
          </p>
        </div>

        {/* Cards section */}
        <div className="relative">
          <ContainerScroll className="min-h-[400vh] space-y-6 md:space-y-8 py-8 md:py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 1}
                incrementY={15}
                incrementZ={5}
                className="rounded-xl border border-border p-6 md:p-8 shadow-lg backdrop-blur-md bg-card/95 max-w-4xl mx-auto"
              >
                <div className="flex items-start md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-foreground flex-1">
                    {phase.title}
                  </h3>
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary flex-shrink-0 bg-primary/10 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default Process;
