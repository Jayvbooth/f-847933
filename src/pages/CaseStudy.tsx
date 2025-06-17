
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, TrendingUp, CheckCircle, Building, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CaseStudyData {
  id: string;
  title: string;
  industry: string;
  image: string;
  heroImage: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  results: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      change: string;
      trend: 'up' | 'down';
    }[];
    timeline: string;
  };
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

const caseStudyData: Record<string, CaseStudyData> = {
  techstartup: {
    id: 'techstartup',
    title: 'TechFlow Solutions',
    industry: 'SaaS Technology',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=800&fit=crop',
    overview: 'TechFlow Solutions transformed their lead generation process from manual qualification to intelligent automation, resulting in unprecedented growth and efficiency.',
    challenge: {
      title: 'The Challenge',
      description: 'TechFlow was struggling with inefficient lead qualification processes that were costing them valuable opportunities and resources.',
      points: [
        'Manual lead scoring taking 48+ hours per prospect',
        '60% of sales time spent on unqualified leads',
        'Inconsistent follow-up processes across the team',
        'Poor lead routing causing 40% lead leakage'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We implemented a comprehensive automated lead scoring and routing system with intelligent nurturing campaigns.',
      features: [
        {
          title: 'Automated Lead Scoring',
          description: 'AI-powered scoring system that evaluates leads in real-time based on behavior and demographics',
          icon: 'trending-up'
        },
        {
          title: 'Intelligent Routing',
          description: 'Smart assignment system that routes leads to the best-matched sales representative',
          icon: 'arrow-up'
        },
        {
          title: 'Nurturing Automation',
          description: 'Personalized email sequences that engage prospects at the perfect moment',
          icon: 'check-circle'
        }
      ]
    },
    results: {
      title: 'The Results',
      description: 'Within 6 months, TechFlow saw dramatic improvements across all key metrics, transforming their entire sales process.',
      metrics: [
        { label: 'Lead Quality Score', value: '340%', change: '+340%', trend: 'up' },
        { label: 'Revenue Growth', value: '$2.4M', change: '+180%', trend: 'up' },
        { label: 'Sales Cycle Time', value: '14 days', change: '-65%', trend: 'down' },
        { label: 'Conversion Rate', value: '24%', change: '+290%', trend: 'up' }
      ],
      timeline: '6 months'
    },
    testimonial: {
      quote: "The transformation has been incredible. We went from drowning in unqualified leads to having a predictable, scalable sales machine. Our team can now focus on what they do best - closing deals.",
      author: 'Sarah Chen',
      position: 'VP of Sales',
      company: 'TechFlow Solutions'
    }
  },
  healthcare: {
    id: 'healthcare',
    title: 'MedConnect Pro',
    industry: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop',
    overview: 'MedConnect Pro revolutionized patient engagement through personalized automation, dramatically improving conversion rates and patient satisfaction.',
    challenge: {
      title: 'The Challenge',
      description: 'MedConnect struggled with low patient engagement and poor conversion rates in their digital health platform.',
      points: [
        'Only 12% patient engagement rate',
        'Generic communication causing patient drop-off',
        'Complex onboarding process deterring new patients',
        'No personalization in patient journey'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We created a personalized patient journey automation system that adapts to individual patient needs and preferences.',
      features: [
        {
          title: 'Personalized Journeys',
          description: 'Customized patient pathways based on health conditions and preferences',
          icon: 'trending-up'
        },
        {
          title: 'Smart Reminders',
          description: 'Intelligent reminder system for appointments and medication schedules',
          icon: 'calendar'
        },
        {
          title: 'Engagement Tracking',
          description: 'Real-time monitoring of patient engagement and intervention triggers',
          icon: 'check-circle'
        }
      ]
    },
    results: {
      title: 'The Results',
      description: 'MedConnect achieved remarkable improvements in patient engagement and business metrics within just 4 months.',
      metrics: [
        { label: 'Patient Engagement', value: '285%', change: '+285%', trend: 'up' },
        { label: 'Revenue Increase', value: '$1.8M', change: '+150%', trend: 'up' },
        { label: 'Onboarding Time', value: '3 mins', change: '-80%', trend: 'down' },
        { label: 'Patient Satisfaction', value: '96%', change: '+45%', trend: 'up' }
      ],
      timeline: '4 months'
    },
    testimonial: {
      quote: "Our patients are now more engaged than ever. The personalized approach has not only improved health outcomes but also significantly boosted our business metrics.",
      author: 'Dr. Michael Rodriguez',
      position: 'Chief Medical Officer',
      company: 'MedConnect Pro'
    }
  },
  fintech: {
    id: 'fintech',
    title: 'FinanceHub',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    overview: 'FinanceHub streamlined their complex sales cycle with multi-touch attribution and smart nurturing, achieving exceptional growth in a competitive market.',
    challenge: {
      title: 'The Challenge',
      description: 'FinanceHub faced challenges with lengthy sales cycles and high customer acquisition costs in the competitive fintech space.',
      points: [
        'Average sales cycle of 180+ days',
        'High customer acquisition costs ($2,400 per customer)',
        'Poor attribution across multiple touchpoints',
        'Low conversion from qualified leads (8%)'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We implemented a sophisticated multi-touch attribution system with intelligent nurturing campaigns to accelerate the sales process.',
      features: [
        {
          title: 'Multi-Touch Attribution',
          description: 'Advanced tracking system that identifies the most effective touchpoints in the customer journey',
          icon: 'trending-up'
        },
        {
          title: 'Smart Nurturing',
          description: 'AI-driven campaigns that deliver the right message at the optimal time',
          icon: 'arrow-up'
        },
        {
          title: 'Predictive Analytics',
          description: 'Machine learning models that predict customer behavior and optimize timing',
          icon: 'building'
        }
      ]
    },
    results: {
      title: 'The Results',
      description: 'FinanceHub achieved extraordinary growth metrics, establishing them as a leader in their market segment.',
      metrics: [
        { label: 'Lead Conversion', value: '420%', change: '+420%', trend: 'up' },
        { label: 'Revenue Growth', value: '$3.1M', change: '+220%', trend: 'up' },
        { label: 'Sales Cycle', value: '45 days', change: '-75%', trend: 'down' },
        { label: 'Customer Acquisition Cost', value: '$680', change: '-72%', trend: 'down' }
      ],
      timeline: '8 months'
    },
    testimonial: {
      quote: "The results exceeded our wildest expectations. We've not only reduced our sales cycle dramatically but also improved the quality of our customer relationships.",
      author: 'Jennifer Walsh',
      position: 'CEO & Founder',
      company: 'FinanceHub'
    }
  }
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const study = id ? caseStudyData[id] : null;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="features-grid absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <Link 
              to="/#case-studies" 
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30 mb-6">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{study.industry}</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {study.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {study.overview}
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-card border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {study.results.metrics[0].value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {study.results.metrics[0].label}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-card border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {study.results.metrics[1].value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {study.results.metrics[1].label}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-card border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {study.results.timeline}
                    </div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src={study.heroImage}
                  alt={study.title}
                  className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">{study.challenge.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              {study.challenge.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {study.challenge.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg">
                  <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowDown className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">{study.solution.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              {study.solution.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {study.solution.features.map((feature, index) => (
                <div key={index} className="text-center p-8 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">{study.results.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              {study.results.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {study.results.metrics.map((metric, index) => (
                <div key={index} className="text-center p-8 bg-background border border-border rounded-xl">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {metric.trend === 'up' ? (
                      <ArrowUp className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <ArrowDown className="w-6 h-6 text-blue-500" />
                    )}
                    <span className={cn(
                      "text-sm font-medium",
                      metric.trend === 'up' ? "text-emerald-500" : "text-blue-500"
                    )}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-border rounded-2xl p-12 relative">
              <div className="absolute top-8 left-8 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-2xl font-medium mb-8 italic leading-relaxed">
                {study.testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="font-bold text-lg">{study.testimonial.author}</div>
                  <div className="text-muted-foreground">
                    {study.testimonial.position}, {study.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
