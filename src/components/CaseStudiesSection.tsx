import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  results: {
    leadIncrease: string;
    revenue: string;
    timeframe: string;
  };
  category: string;
  categoryColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'techstartup',
    title: 'Why Most SaaS Companies Keep Getting Lead Generation Wrong',
    industry: 'SaaS Technology',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    problem: 'Struggling with lead qualification and manual processes that were costing valuable opportunities',
    solution: 'Automated lead scoring and intelligent routing system with personalized nurturing',
    results: {
      leadIncrease: '340%',
      revenue: '$2.4M',
      timeframe: '6 months'
    },
    category: 'Technology',
    categoryColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'healthcare',
    title: 'How to Get More Patients Without Hiring a Full Marketing Team',
    industry: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    problem: 'Low conversion rates and poor patient engagement across their digital platform',
    solution: 'Personalized patient journey automation with smart engagement tracking',
    results: {
      leadIncrease: '285%',
      revenue: '$1.8M',
      timeframe: '4 months'
    },
    category: 'Healthcare',
    categoryColor: 'bg-green-100 text-green-700'
  },
  {
    id: 'fintech',
    title: 'What Working With a Lead Generation Service Actually Looks Like',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    problem: 'Complex sales cycle and high customer acquisition costs in competitive market',
    solution: 'Multi-touch attribution and smart nurturing campaigns with predictive analytics',
    results: {
      leadIncrease: '420%',
      revenue: '$3.1M',
      timeframe: '8 months'
    },
    category: 'Finance',
    categoryColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'ecommerce',
    title: 'The Real Cost of Bad Lead Quality (It\'s Not What You Think)',
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    problem: 'High bounce rates and low customer lifetime value despite strong traffic',
    solution: 'Advanced lead scoring and behavioral tracking to identify high-value prospects',
    results: {
      leadIncrease: '195%',
      revenue: '$890K',
      timeframe: '3 months'
    },
    category: 'E-commerce',
    categoryColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 'consulting',
    title: 'How We Helped a Consulting Firm Scale Without Burnout',
    industry: 'Business Consulting',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    problem: 'Manual lead generation process consuming too much time and resources',
    solution: 'Automated prospecting and qualification system with smart follow-up sequences',
    results: {
      leadIncrease: '520%',
      revenue: '$1.2M',
      timeframe: '5 months'
    },
    category: 'Consulting',
    categoryColor: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: 'realestate',
    title: 'Why Traditional Real Estate Marketing Fails in 2024',
    industry: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
    problem: 'Inconsistent lead flow and difficulty tracking ROI from marketing efforts',
    solution: 'Integrated CRM system with automated nurturing and market analysis tools',
    results: {
      leadIncrease: '380%',
      revenue: '$3.8M',
      timeframe: '7 months'
    },
    category: 'Real Estate',
    categoryColor: 'bg-emerald-100 text-emerald-700'
  }
];

const CaseStudiesSection = () => {
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
      {/* Subtle background */}
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
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Case Studies</span>
          </div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Practical reads to help you move{" "}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <em className="italic">faster</em>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.span>
            .
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Real results from businesses that transformed their growth with data-driven lead generation strategies
          </motion.p>
        </motion.div>

        {/* Featured Case Study */}
        <div className="mb-16">
          <CaseStudyCard study={caseStudies[0]} index={0} isVisible={isVisible} featured />
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(1).map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index + 1} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  isVisible: boolean;
  featured?: boolean;
}

const CaseStudyCard = ({ study, index, isVisible, featured = false }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (featured) {
    return (
      <Link 
        to={`/case-study/${study.id}`}
        className={cn(
          "group block transition-all duration-700 ease-out transform",
          isVisible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-16 scale-95"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-border transition-all duration-300 hover:shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img 
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div className={cn("inline-flex px-3 py-1 rounded-full text-xs font-medium", study.categoryColor)}>
                  {study.category}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {study.problem}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{study.results.leadIncrease}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{study.results.revenue}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{study.results.timeframe}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</div>
                </div>
              </div>

              {/* Read indicator */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
                <span className="text-xs text-muted-foreground">5 min read</span>
                <ArrowUpRight className={cn(
                  "w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300",
                  isHovered ? "translate-x-1 -translate-y-1" : ""
                )} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/case-study/${study.id}`}
      className={cn(
        "group block transition-all duration-700 ease-out transform",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-16 scale-95"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-border transition-all duration-300 hover:shadow-lg h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className={cn("px-3 py-1 rounded-full text-xs font-medium", study.categoryColor)}>
              {study.category}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {study.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {study.problem}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{study.results.leadIncrease}</div>
              <div className="text-xs text-muted-foreground">Increase</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{study.results.revenue}</div>
              <div className="text-xs text-muted-foreground">Revenue</div>
            </div>
          </div>

          {/* Read indicator */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
            <span className="text-xs text-muted-foreground">5 min read</span>
            <ArrowUpRight className={cn(
              "w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300",
              isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
            )} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudiesSection;
