
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Calendar from './Calendar';
import { TrendingUp, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [callCount, setCallCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start counting up animation after component loads
      setTimeout(() => {
        let count = 0;
        const targetCount = 23;
        const duration = 2000; // 2 seconds
        const increment = targetCount / (duration / 50);
        
        const counter = setInterval(() => {
          count += increment;
          if (count >= targetCount) {
            setCallCount(targetCount);
            clearInterval(counter);
          } else {
            setCallCount(Math.floor(count));
          }
        }, 50);
      }, 800);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleNewCall = () => {
    const newCount = callCount + Math.floor(Math.random() * 3) + 1; // Add 1-3 calls
    setCallCount(newCount);
    
    toast({
      title: "New Sales Calls Generated!",
      description: `${newCount - callCount} qualified sales calls from Leadea platform`,
      duration: 3000,
    });
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-7xl w-full transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Live sales call generation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
              Your calendar filled with <span className="text-primary">qualified sales calls</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Watch your business grow with guaranteed qualified sales calls. Our AI-powered platform fills your calendar with high-intent prospects ready to buy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 items-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12 px-8 transition-all duration-200 min-h-[48px] shadow-lg hover:shadow-xl">
                Start Generating Sales Calls
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-6 text-sm text-muted-foreground">
              No setup required • Guaranteed qualified sales calls • Free trial
            </div>
          </div>
          
          {/* Right Side - Compact Dashboard */}
          <div className="w-full lg:w-[400px]">
            <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-lg">
              {/* Dashboard Header */}
              <div className="bg-card w-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm">Overview of your calendar with us</span>
                  </div>
                </div>
                
                {/* Compact Dashboard Content */}
                <div className="p-4 space-y-4">
                  {/* Call Counter */}
                  <div className="text-center space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Sales Calls Generated This Week
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      {callCount}
                    </div>
                    <Button 
                      onClick={handleNewCall}
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-4 text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Generate Call
                    </Button>
                  </div>

                  {/* Compact Call Sources */}
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Call Sources
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="flex items-center justify-between px-2 py-1 rounded bg-primary/10 border border-primary/20">
                        <span className="text-primary font-medium">Leadea</span>
                        <span className="font-semibold text-primary">{Math.floor(callCount * 0.78)}</span>
                      </div>
                      <div className="flex items-center justify-between px-2 py-1 rounded bg-muted/30">
                        <span className="text-muted-foreground">Referrals</span>
                        <span className="font-medium text-muted-foreground">{Math.floor(callCount * 0.13)}</span>
                      </div>
                      <div className="flex items-center justify-between px-2 py-1 rounded bg-muted/30">
                        <span className="text-muted-foreground">Organic</span>
                        <span className="font-medium text-muted-foreground">{Math.floor(callCount * 0.06)}</span>
                      </div>
                      <div className="flex items-center justify-between px-2 py-1 rounded bg-muted/30">
                        <span className="text-muted-foreground">Social</span>
                        <span className="font-medium text-muted-foreground">{Math.floor(callCount * 0.03)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Compact Calendar */}
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Your Calendar
                    </div>
                    <div className="bg-background rounded-lg p-2">
                      <Calendar callCount={callCount} />
                    </div>
                  </div>
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
