import React, { useEffect, useRef, useState } from 'react';
import { Zap, Target, BarChart3, Users, Shield, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Lead Prioritization',
    description: 'Automatically identify and prioritize high-potential leads based on behavior, demographics, and engagement metrics.',
  },
  {
    id: 2,
    icon: Target,
    title: 'Precision Targeting',
    description: 'Refine your outreach with laser-focused targeting, ensuring you connect with the right prospects at the right time.',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Gain actionable insights with comprehensive analytics, tracking lead generation performance and ROI in real-time.',
  },
  {
    id: 4,
    icon: Users,
    title: 'Team Collaboration',
    description: 'Streamline teamwork with shared dashboards, collaborative workflows, and integrated communication tools.',
  },
  {
    id: 5,
    icon: Shield,
    title: 'Data Security',
    description: 'Protect sensitive data with enterprise-grade security measures, ensuring compliance and maintaining customer trust.',
  },
  {
    id: 6,
    icon: Rocket,
    title: 'Scalable Automation',
    description: 'Automate repetitive tasks and scale your lead generation efforts without sacrificing quality or personalization.',
  },
];

const Features = () => {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="features-grid-subtle absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-border/50 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Core Features</span>
          </div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Everything you need to{" "}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <em className="italic">scale</em>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.span>
            {" "}your business
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Powerful tools and intelligent automation to transform your lead generation process
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={cn(
                "bg-card border border-border/50 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
                "transform transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
