
import React from 'react';
import { TiltedScroll } from '@/components/ui/tilted-scroll';
import { DollarSign, Award, TrendingUp } from 'lucide-react';

const ClosedDealsSection = () => {
  const closedDeals = [
    { id: "1", text: "Deal Closed - $2.3M Collected" },
    { id: "2", text: "Cash Collected - $1.8M" },
    { id: "3", text: "Deal Closed - Paid in Full $950K" },
    { id: "4", text: "Cash Collected - $3.2M" },
    { id: "5", text: "Deal Closed - $1.4M Collected" },
    { id: "6", text: "Paid in Full - $2.7M" },
    { id: "7", text: "Deal Closed - $4.1M Collected" },
    { id: "8", text: "Cash Collected - $1.9M" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-6 w-6" />
                <span className="text-sm font-medium uppercase tracking-wider">Success Stories</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                Closing Deals,
                <span className="text-primary block">Collecting Results</span>
              </h2>
              
              <p className="text-lg text-muted-foreground text-balance max-w-lg">
                Watch our track record of successful deal closures unfold in real-time. 
                Every card represents millions in collected revenue and satisfied clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="cosmic-glass rounded-xl p-6 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <DollarSign className="h-5 w-5" />
                  <span className="text-sm font-medium">Total Collected</span>
                </div>
                <div className="text-2xl font-bold">$18.4M+</div>
                <div className="text-sm text-muted-foreground">This quarter</div>
              </div>
              
              <div className="cosmic-glass rounded-xl p-6 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-medium">Success Rate</span>
                </div>
                <div className="text-2xl font-bold">94.7%</div>
                <div className="text-sm text-muted-foreground">Deal closure</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Start Your Deal
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl scale-150 opacity-30"></div>
              
              {/* Component Container */}
              <div className="relative cosmic-glass rounded-2xl p-8 backdrop-blur-sm">
                <TiltedScroll 
                  items={closedDeals}
                  className="transform scale-110"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Award className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default ClosedDealsSection;
