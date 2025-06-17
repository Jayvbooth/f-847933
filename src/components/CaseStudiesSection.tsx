
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  color: string;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'techstartup',
    title: 'TechFlow Solutions',
    industry: 'SaaS Technology',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    problem: 'Struggling with lead qualification and manual processes that were costing valuable opportunities',
    solution: 'Automated lead scoring and intelligent routing system with personalized nurturing',
    results: {
      leadIncrease: '340%',
      revenue: '$2.4M',
      timeframe: '6 months'
    },
    color: 'from-blue-500/10 to-cyan-500/10',
    accentColor: 'blue'
  },
  {
    id: 'healthcare',
    title: 'MedConnect Pro',
    industry: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    problem: 'Low conversion rates and poor patient engagement across their digital platform',
    solution: 'Personalized patient journey automation with smart engagement tracking',
    results: {
      leadIncrease: '285%',
      revenue: '$1.8M',
      timeframe: '4 months'
    },
    color: 'from-emerald-500/10 to-teal-500/10',
    accentColor: 'emerald'
  },
  {
    id: 'fintech',
    title: 'FinanceHub',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    problem: 'Complex sales cycle and high customer acquisition costs in competitive market',
    solution: 'Multi-touch attribution and smart nurturing campaigns with predictive analytics',
    results: {
      leadIncrease: '420%',
      revenue: '$3.1M',
      timeframe: '8 months'
    },
    color: 'from-purple-500/10 to-pink-500/10',
    accentColor: 'purple'
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
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="features-grid-subtle absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Animated heading */}
        <div className={cn(
          "text-center mb-20 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full border border-border/50 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-shift bg-300% leading-tight">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how we've transformed businesses across industries with data-driven solutions and measurable results
          </p>
        </div>

        {/* Case studies grid - horizontal layout */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} isVisible={isVisible} />
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
}

const CaseStudyCard = ({ study, index, isVisible }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <Link 
      to={`/case-study/${study.id}`}
      className={cn(
        "group block transition-all duration-700 ease-out transform",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-16 scale-95"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-1",
        "grid md:grid-cols-2 gap-0 min-h-[320px]"
      )}>
        {/* Gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          study.color
        )} />
        
        {/* Content Side */}
        <div className={cn(
          "relative z-10 p-8 lg:p-12 flex flex-col justify-between",
          isEven ? "order-1" : "order-2"
        )}>
          {/* Industry tag */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                <Building2 className="w-3 h-3" />
                {study.industry}
              </div>
              <ArrowUpRight className={cn(
                "w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300",
                isHovered ? "translate-x-1 -translate-y-1" : ""
              )} />
            </div>

            {/* Title and description */}
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold group-hover:text-primary transition-colors duration-300">
                {study.title}
              </h3>
              
              <div className="space-y-3">
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
                  The Challenge
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  {study.problem}
                </p>
              </div>
            </div>
          </div>

          {/* Results metrics */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="space-y-1">
              <div className={cn(
                "text-2xl lg:text-3xl font-bold transition-colors duration-300",
                study.accentColor === 'blue' && "text-blue-500",
                study.accentColor === 'emerald' && "text-emerald-500",
                study.accentColor === 'purple' && "text-purple-500"
              )}>
                {study.results.leadIncrease}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Lead Increase</div>
            </div>
            <div className="space-y-1">
              <div className={cn(
                "text-2xl lg:text-3xl font-bold transition-colors duration-300",
                study.accentColor === 'blue' && "text-blue-500",
                study.accentColor === 'emerald' && "text-emerald-500",
                study.accentColor === 'purple' && "text-purple-500"
              )}>
                {study.results.revenue}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Revenue Growth</div>
            </div>
          </div>

          {/* Read more indicator */}
          <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300 mt-6">
            <span className="text-sm">View Full Case Study</span>
            <ArrowRight className={cn(
              "w-4 h-4 transition-all duration-300",
              isHovered ? "translate-x-1" : ""
            )} />
          </div>
        </div>

        {/* Image Side */}
        <div className={cn(
          "relative overflow-hidden",
          isEven ? "order-2" : "order-1"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
          <img 
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay decoration */}
          <div className="absolute top-6 right-6 z-20">
            <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
          
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10" />
          
          {/* Timeline badge */}
          <div className="absolute bottom-6 left-6 z-20">
            <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
              {study.results.timeframe} timeline
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudiesSection;
