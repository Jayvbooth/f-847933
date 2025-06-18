
import React, { useEffect, useRef, useState } from 'react';
import { Search, Target, MessageSquare, BarChart3, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { TiltedScroll } from '@/components/ui/tilted-scroll';

const processSteps = [
  {
    id: "1",
    text: "Lead Discovery - We start by understanding your ideal customer profile and target market. Our team analyzes your industry, competitors, and market opportunities to identify the highest-quality prospects for your business."
  },
  {
    id: "2", 
    text: "Multi-Channel Outreach - Engage prospects through personalized email campaigns, social media interactions, and direct outreach to maximize response rates and establish meaningful connections."
  },
  {
    id: "3",
    text: "Lead Qualification - Our team qualifies leads based on predefined criteria before scheduling any meetings. We ensure only high-potential prospects are passed on to your sales team."
  },
  {
    id: "4",
    text: "Calendar Integration - Qualified leads are seamlessly scheduled into your calendar using our automated booking system. We handle all the coordination, sending confirmations and reminders to ensure high show-up rates."
  },
  {
    id: "5",
    text: "Continuous Optimization - We constantly monitor performance metrics and optimize our approach based on conversion rates, feedback, and market changes. Our process evolves to deliver increasingly better results for your business."
  }
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">OUR PROCESS</span>
            </div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              How we fill your calendar with{" "}
              <motion.span 
                className="text-primary relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <em className="italic">qualified leads</em>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our proven 5-step process ensures you get a steady stream of high-quality leads that are ready to convert. From discovery to delivery, we handle everything so you can focus on closing deals.
            </motion.p>
          </motion.div>

          {/* Right Side - Tilted Scroll */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TiltedScroll 
              items={processSteps}
              className="max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
