
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudiesSection = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "SaaS Platform",
      problem: "Low lead quality & 12% conversion rate",
      solution: "AI-powered lead scoring & targeted campaigns",
      results: {
        leadIncrease: "340%",
        conversionRate: "47%",
        revenue: "$2.3M"
      },
      timeframe: "3 months",
      gradient: "from-blue-500/20 to-purple-600/20",
      accentColor: "text-blue-500",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      client: "Growth Marketing Pro",
      industry: "Marketing Agency",
      problem: "Inconsistent lead flow & high acquisition costs",
      solution: "Multi-channel automation & predictive analytics",
      results: {
        leadIncrease: "275%",
        conversionRate: "38%",
        revenue: "$1.8M"
      },
      timeframe: "4 months",
      gradient: "from-emerald-500/20 to-teal-600/20",
      accentColor: "text-emerald-500",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 3,
      client: "Enterprise Solutions Inc",
      industry: "B2B Technology",
      problem: "Complex sales cycle & low qualified leads",
      solution: "Account-based marketing & lead nurturing",
      results: {
        leadIncrease: "420%",
        conversionRate: "52%",
        revenue: "$4.1M"
      },
      timeframe: "6 months",
      gradient: "from-orange-500/20 to-red-600/20",
      accentColor: "text-orange-500",
      borderColor: "border-orange-500/30"
    }
  ];

  const handleCaseStudyClick = (id: number) => {
    navigate(`/case-study/${id}`);
  };

  return (
    <section id="case-studies" className="relative py-20 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 case-studies-grid opacity-30"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Success Stories
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Real Results, Real Growth
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See how we've transformed businesses across industries with our proven lead generation strategies
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => handleCaseStudyClick(study.id)}
              className="group cursor-pointer"
            >
              <div className={`relative bg-card/80 backdrop-blur-sm border border-border hover:${study.borderColor} rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                    {/* Left side - Client info and problem */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-2 h-2 rounded-full bg-current ${study.accentColor}`}></div>
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{study.industry}</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{study.client}</h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">The Challenge</h4>
                          <p className="text-lg text-foreground/90">{study.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Our Solution</h4>
                          <p className="text-lg text-foreground/90">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Timeline:</span>
                        <span className="font-medium text-foreground">{study.timeframe}</span>
                      </div>
                    </div>

                    {/* Right side - Results */}
                    <div className="lg:flex-1">
                      <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8">
                        <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Results Achieved
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className={`text-3xl lg:text-4xl font-bold mb-2 ${study.accentColor}`}>
                              +{study.results.leadIncrease}
                            </div>
                            <div className="text-sm text-muted-foreground">Lead Increase</div>
                          </div>
                          
                          <div className="text-center">
                            <div className={`text-3xl lg:text-4xl font-bold mb-2 ${study.accentColor}`}>
                              {study.results.conversionRate}
                            </div>
                            <div className="text-sm text-muted-foreground">Conversion Rate</div>
                          </div>
                          
                          <div className="text-center">
                            <div className={`text-3xl lg:text-4xl font-bold mb-2 ${study.accentColor}`}>
                              {study.results.revenue}
                            </div>
                            <div className="text-sm text-muted-foreground">Revenue Generated</div>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-center group-hover:justify-end transition-all duration-300">
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <span>View Full Case Study</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to become our next success story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their lead generation with our proven strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground text-background px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-foreground/90 inline-flex items-center gap-2"
            >
              Start Your Success Story
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
