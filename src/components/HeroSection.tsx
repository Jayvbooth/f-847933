
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Calendar from './Calendar';
import { Loader, TrendingUp, Users, Calendar as CalendarIcon } from 'lucide-react';

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
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Launching new payment features
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Financial operations for <span className="text-primary">growth</span> businesses
        </h1>
        
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
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-foreground font-medium">Overview of Your Calendar With Us</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded bg-green-500"></div>
                    <span>Qualified Leads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded bg-blue-500"></div>
                    <span>Referrals</span>
                  </div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-600 text-sm font-medium">
                  Active Pipeline
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Lead Sources</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-500/10 text-green-600 border border-green-500/20">
                      <CalendarIcon className="h-3 w-3" />
                      <span>Calendar View</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <Users className="h-3 w-3" />
                      <span>Lead Pipeline</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <TrendingUp className="h-3 w-3" />
                      <span>Performance</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Lead Quality</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-green-500/10">
                      <span className="text-sm text-green-600">Qualified Leads</span>
                      <span className="text-xs font-medium text-green-600">85%</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-500/10">
                      <span className="text-sm text-blue-600">Referrals</span>
                      <span className="text-xs font-medium text-blue-600">10%</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-purple-500/10">
                      <span className="text-sm text-purple-600">Organic</span>
                      <span className="text-xs font-medium text-purple-600">5%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4 bg-background overflow-hidden">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground">Your Lead Calendar</h3>
                    <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full border border-green-500/30">Live</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 px-3 rounded-md bg-foreground text-background flex items-center justify-center text-sm font-medium whitespace-nowrap">
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
