
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Calendar from './Calendar';
import { Loader, TrendingUp, Plus, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leadCount, setLeadCount] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start counting up animation after component loads
      setTimeout(() => {
        setIsCountingUp(true);
        let count = 0;
        const targetCount = 23;
        const duration = 2000; // 2 seconds
        const increment = targetCount / (duration / 50);
        
        const counter = setInterval(() => {
          count += increment;
          if (count >= targetCount) {
            setLeadCount(targetCount);
            clearInterval(counter);
          } else {
            setLeadCount(Math.floor(count));
          }
        }, 50);
      }, 800);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleNewLead = () => {
    const newCount = leadCount + Math.floor(Math.random() * 3) + 1; // Add 1-3 leads
    setLeadCount(newCount);
    
    toast({
      title: "🎉 New Leads Generated!",
      description: `${newCount - leadCount} qualified leads from Leadea just booked calls`,
      duration: 4000,
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
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-600 border border-green-500/30">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Live lead generation active
            <Loader className="h-3 w-3 animate-spin text-green-600" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Your calendar filled with <span className="text-primary">qualified leads</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Watch your business grow with guaranteed qualified leads. Our AI-powered platform fills your calendar with high-intent prospects ready to buy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button 
            animated 
            className="bg-green-600 text-white hover:bg-green-700 text-base h-12 px-8 transition-all duration-200 min-h-[48px] shadow-lg hover:shadow-xl"
          >
            Start Generating Leads
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Watch Demo
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          No setup required • Guaranteed qualified leads • Free trial
        </div>
      </div>
      
      {/* Dashboard UI */}
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-2xl">
          {/* Dashboard Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-border gap-4">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="h-8 w-8 rounded-md bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-foreground font-medium text-base">Lead Generation Dashboard</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-8 px-3 rounded-md bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-600 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  Active
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
              {/* Left Sidebar - Counter & Stats */}
              <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-border p-6 space-y-6 bg-card">
                {/* Lead Counter */}
                <div className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Leads Generated This Week
                  </div>
                  <div className="relative">
                    <div className={`text-6xl font-bold text-green-600 transition-all duration-500 ${isCountingUp ? 'animate-pulse' : ''}`}>
                      {leadCount}
                    </div>
                    <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-xl"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    +{Math.floor(leadCount * 0.15)} from last week
                  </div>
                </div>

                {/* Generate New Lead Button */}
                <Button 
                  onClick={handleNewLead}
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                  Generate New Lead
                </Button>

                {/* Lead Sources */}
                <div className="space-y-3">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Lead Sources (This Week)
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-green-500/10 border border-green-500/20">
                      <span className="text-sm text-green-600">Leadea Platform</span>
                      <span className="text-sm font-medium text-green-600">{Math.floor(leadCount * 0.78)}</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-500/10 border border-blue-500/20">
                      <span className="text-sm text-blue-600">Referrals</span>
                      <span className="text-sm font-medium text-blue-600">{Math.floor(leadCount * 0.13)}</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-purple-500/10 border border-purple-500/20">
                      <span className="text-sm text-purple-600">Organic Search</span>
                      <span className="text-sm font-medium text-purple-600">{Math.floor(leadCount * 0.06)}</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-orange-500/10 border border-orange-500/20">
                      <span className="text-sm text-orange-600">Social Media</span>
                      <span className="text-sm font-medium text-orange-600">{Math.floor(leadCount * 0.03)}</span>
                    </div>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Conversion Rate
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    94.7%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Leads that book calls
                  </div>
                </div>
              </div>
              
              {/* Right Content - Calendar */}
              <div className="flex-1 p-6 bg-background">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-foreground text-lg">Your Calendar</h3>
                    <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
                      <Bell className="h-3 w-3" />
                      Live Updates
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Click on any lead to see details
                  </div>
                </div>
                
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
