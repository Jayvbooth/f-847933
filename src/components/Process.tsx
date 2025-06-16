
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
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="md:sticky md:top-24 md:h-fit md:py-12 mb-12 md:mb-0">
            <h5 className="text-xs uppercase tracking-wide text-muted-foreground">Our Process</h5>
            <h2 className="mb-6 mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              How we fill your{" "}
              <span className="text-primary">calendar with qualified leads</span>
            </h2>
            <p className="max-w-prose text-sm md:text-base text-muted-foreground">
              Our proven 5-step process ensures you get a steady stream of high-quality leads 
              that are ready to convert. From discovery to delivery, we handle everything 
              so you can focus on closing deals.
            </p>
          </div>
          <div className="relative">
            <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
              {PROCESS_PHASES.map((phase, index) => (
                <CardSticky
                  key={phase.id}
                  index={index + 2}
                  className="rounded-xl border border-border p-6 md:p-8 shadow-lg backdrop-blur-md bg-card"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="my-4 md:my-6 text-xl md:text-2xl font-bold tracking-tighter text-foreground">
                      {phase.title}
                    </h3>
                    <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{phase.description}</p>
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
