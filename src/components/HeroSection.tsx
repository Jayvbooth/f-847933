import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Calendar from './Calendar';
import { Loader, TrendingUp, Users, Calendar as CalendarIcon } from 'lucide-react';
import { motion } from 'motion/react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/399ca794-860a-4693-86bf-8967ca4adeb5.png")',
        }}
      />
      
      {/* Cosmic particle effect (background dots) with fade to next section */}
      <div className="absolute inset-0 cosmic-grid opacity-[0.015] z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-20"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-30">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-40 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Launching new payment features
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Financial operations for{" "}
          <motion.span 
            className="text-primary relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <em className="italic">growth</em>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            />
          </motion.span>
          {" "}businesses
        </motion.h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Streamline your financial workflows with our comprehensive fintech platform. Built for modern businesses who value efficiency, compliance, and scalable growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button 
            animated 
            className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
          >
            Start for free
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Book a demo
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          No credit card required • Free 14-day trial
        </div>
      </div>
      
      {/* Calendar UI integrated in hero section with glassmorphic effect */}
      <div className={`w-full max-w-7xl mt-12 z-40 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 md:p-4 border-b border-border gap-3 md:gap-4">
              <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                <div className="h-6 w-6 md:h-8 md:w-8 rounded-md bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base truncate">Overview of Your Calendar With Us</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-3 w-full md:w-auto">
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 md:h-3 md:w-3 rounded bg-green-500"></div>
                    <span className="whitespace-nowrap">Leads From Leadea</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 md:h-3 md:w-3 rounded bg-blue-500"></div>
                    <span className="whitespace-nowrap">Referrals</span>
                  </div>
                </div>
                
                <div className="h-6 md:h-8 px-2 md:px-3 rounded-md bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-600 text-xs md:text-sm font-medium whitespace-nowrap">
                  Active Pipeline
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-border p-3 md:p-4 space-y-3 md:space-y-4 bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Calendar Views</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 rounded-md bg-green-500/10 text-green-600 border border-green-500/20">
                      <CalendarIcon className="h-3 w-3" />
                      <span className="text-xs md:text-sm">Calendar View</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <Users className="h-3 w-3" />
                      <span className="text-xs md:text-sm">Clients</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2 md:pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Lead Quality</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 rounded-md bg-green-500/10">
                      <span className="text-xs md:text-sm text-green-600">Leads From Leadea</span>
                      <span className="text-xs font-medium text-green-600">80%</span>
                    </div>
                    <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 rounded-md bg-blue-500/10">
                      <span className="text-xs md:text-sm text-blue-600">Referrals</span>
                      <span className="text-xs font-medium text-blue-600">12%</span>
                    </div>
                    <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 rounded-md bg-purple-500/10">
                      <span className="text-xs md:text-sm text-purple-600">Organic</span>
                      <span className="text-xs font-medium text-purple-600">5%</span>
                    </div>
                    <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 rounded-md bg-orange-500/10">
                      <span className="text-xs md:text-sm text-orange-600">Social Media</span>
                      <span className="text-xs font-medium text-orange-600">3%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-3 md:p-4 bg-background overflow-hidden">
                {/* Calendar Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground text-sm md:text-base">Your Calendar</h3>
                    <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full border border-green-500/30">Live</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                    <div className="h-6 md:h-8 px-2 md:px-3 rounded-md bg-foreground text-background flex items-center justify-center text-xs md:text-sm font-medium whitespace-nowrap w-full sm:w-auto text-center">
                      View All Leads
                    </div>
                  </div>
                </div>
                
                {/* Calendar Component */}
                <div className="overflow-hidden">
                  <Calendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
