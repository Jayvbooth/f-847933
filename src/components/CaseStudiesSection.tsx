
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, TrendingUp } from 'lucide-react';
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
}

const caseStudies: CaseStudy[] = [
  {
    id: 'techstartup',
    title: 'TechFlow Solutions',
    industry: 'SaaS Technology',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    problem: 'Struggling with lead qualification and manual processes',
    solution: 'Automated lead scoring and intelligent routing system',
    results: {
      leadIncrease: '340%',
      revenue: '$2.4M',
      timeframe: '6 months'
    },
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'healthcare',
    title: 'MedConnect Pro',
    industry: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    problem: 'Low conversion rates and poor patient engagement',
    solution: 'Personalized patient journey automation',
    results: {
      leadIncrease: '285%',
      revenue: '$1.8M',
      timeframe: '4 months'
    },
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'fintech',
    title: 'FinanceHub',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    problem: 'Complex sales cycle and high customer acquisition costs',
    solution: 'Multi-touch attribution and smart nurturing campaigns',
    results: {
      leadIncrease: '420%',
      revenue: '$3.1M',
      timeframe: '8 months'
    },
    color: 'from-purple-500/20 to-pink-500/20'
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
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="features-grid absolute inset-0"></div>
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

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
        {/* Gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          study.color
        )} />
        
        {/* Corner decorators */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300" />
        
        <div className="relative z-10 p-8">
          {/* Industry tag */}
          <div className="inline-flex items-center px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-muted-foreground mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
            {study.industry}
          </div>

          {/* Company image */}
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <img 
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {study.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
            {study.problem}
          </p>

          {/* Results preview */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-muted/30 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
              <div className="text-2xl font-bold text-primary mb-1 flex items-center justify-center gap-1">
                <ArrowUp className="w-5 h-5" />
                {study.results.leadIncrease}
              </div>
              <div className="text-xs text-muted-foreground">Lead Increase</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
              <div className="text-2xl font-bold text-primary mb-1">
                {study.results.revenue}
              </div>
              <div className="text-xs text-muted-foreground">Revenue Growth</div>
            </div>
          </div>

          {/* Read more indicator */}
          <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
            <span>View Case Study</span>
            <ArrowUp className={cn(
              "w-4 h-4 rotate-45 transition-all duration-300",
              isHovered ? "translate-x-1" : ""
            )} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudiesSection;
