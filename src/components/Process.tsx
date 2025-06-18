import React, { useEffect, useRef, useState } from 'react';
import { Search, Target, MessageSquare, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const processSteps = [
  {
    id: 1,
    title: 'Targeted Prospecting',
    description: 'We identify and target the most relevant prospects for your business using advanced data analytics and market research.',
    icon: Search
  },
  {
    id: 2,
    title: 'Multi-Channel Outreach',
    description: 'Engage prospects through personalized email campaigns, social media interactions, and direct outreach to maximize response rates.',
    icon: Target
  },
  {
    id: 3,
    title: 'Lead Qualification',
    description: 'Our team qualifies leads based on predefined criteria, ensuring that only high-potential prospects are passed on to your sales team.',
    icon: MessageSquare
  },
  {
    id: 4,
    title: 'Performance Tracking',
    description: 'We continuously monitor and optimize campaign performance, providing detailed analytics and reporting to drive continuous improvement.',
    icon: BarChart3
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
        {/* Header */}
        <motion.div 
          className={cn(
            "text-center mb-20 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Our Process</span>
          </div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            How we{" "}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <em className="italic">deliver</em>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.span>
            {" "}results
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our proven 4-step methodology that transforms prospects into qualified leads
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
  };
  index: number;
  isVisible: boolean;
}

const ProcessStep = ({ step, index, isVisible }: ProcessStepProps) => {
  const Icon = step.icon;

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
    </motion.div>
  );
};

export default Process;
