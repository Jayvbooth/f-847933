import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, TrendingUp, Target, Lightbulb, BarChart3 } from 'lucide-react';
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
  featured?: boolean;
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
    featured: true
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
    }
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
    }
  },
  {
    id: 'ecommerce',
    title: 'ShopFlow',
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    problem: 'High cart abandonment and low repeat purchases',
    solution: 'Automated recovery campaigns and loyalty programs',
    results: {
      leadIncrease: '190%',
      revenue: '$950K',
      timeframe: '3 months'
    }
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

  const featuredStudy = caseStudies.find(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

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

        {/* Case studies layout */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Featured case study - Large horizontal card */}
          {featuredStudy && (
            <FeaturedCaseStudyCard study={featuredStudy} isVisible={isVisible} />
          )}

          {/* Other case studies - Three smaller cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherStudies.map((study, index) => (
              <CompactCaseStudyCard key={study.id} study={study} index={index + 1} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeaturedCaseStudyCardProps {
  study: CaseStudy;
  isVisible: boolean;
}

const FeaturedCaseStudyCard = ({ study, isVisible }: FeaturedCaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/case-study/${study.id}`}
      className={cn(
        "group block transition-all duration-700 ease-out transform",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-card border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] transform hover:-translate-y-4 group-hover:scale-[1.02]">
        {/* 3D Floating glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left side - Content */}
          <div className="space-y-6">
            {/* Industry tag */}
            <div className="inline-flex items-center px-4 py-2 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              {study.industry}
            </div>

            <h3 className="text-4xl font-bold group-hover:text-primary transition-colors duration-300">
              {study.title}
            </h3>

            {/* Problem section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Target className="w-4 h-4" />
                PROBLEM
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {study.problem}
              </p>
            </div>

            {/* Solution section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Lightbulb className="w-4 h-4" />
                SOLUTION
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {study.solution}
              </p>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-muted/30 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-primary mb-1 flex items-center justify-center gap-1">
                  <ArrowUp className="w-5 h-5" />
                  {study.results.leadIncrease}
                </div>
                <div className="text-xs text-muted-foreground">Lead Increase</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-primary mb-1">
                  {study.results.revenue}
                </div>
                <div className="text-xs text-muted-foreground">Revenue Growth</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-primary mb-1">
                  {study.results.timeframe}
                </div>
                <div className="text-xs text-muted-foreground">Timeframe</div>
              </div>
            </div>

            {/* Read more indicator */}
            <div className="flex items-center text-primary font-medium pt-4 group-hover:gap-3 transition-all duration-300">
              <span>View Full Case Study</span>
              <ArrowUp className={cn(
                "w-4 h-4 rotate-45 transition-all duration-300",
                isHovered ? "translate-x-1" : ""
              )} />
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl h-full min-h-[400px]">
              <img 
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface CompactCaseStudyCardProps {
  study: CaseStudy;
  index: number;
  isVisible: boolean;
}

const CompactCaseStudyCard = ({ study, index, isVisible }: CompactCaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/case-study/${study.id}`}
      className={cn(
        "group block transition-all duration-700 ease-out transform",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transform hover:-translate-y-3 group-hover:scale-[1.02]">
        {/* 3D Floating glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
        
        <div className="relative z-10 p-6">
          {/* Industry tag */}
          <div className="inline-flex items-center px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-muted-foreground mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
            {study.industry}
          </div>

          {/* Company image */}
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <img 
              src={study.image}
              alt={study.title}
              className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {study.title}
          </h3>
          
          {/* Quick problem/solution */}
          <div className="space-y-2 mb-4">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Problem:</span> {study.problem.slice(0, 60)}...
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Solution:</span> {study.solution.slice(0, 60)}...
            </div>
          </div>

          {/* Key metric */}
          <div className="text-center p-3 bg-muted/30 rounded-lg mb-4 group-hover:bg-primary/10 transition-colors duration-300">
            <div className="text-xl font-bold text-primary mb-1 flex items-center justify-center gap-1">
              <BarChart3 className="w-4 h-4" />
              {study.results.leadIncrease}
            </div>
            <div className="text-xs text-muted-foreground">Lead Increase</div>
          </div>

          {/* Read more indicator */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
            <span>View Case Study</span>
            <ArrowUp className={cn(
              "w-3 h-3 rotate-45 transition-all duration-300",
              isHovered ? "translate-x-0.5" : ""
            )} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudiesSection;
