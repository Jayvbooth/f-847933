
import React from 'react';
import { TiltedScroll } from '@/components/ui/tilted-scroll';
import { Award, TrendingUp } from 'lucide-react';

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
    <section className="relative py-32 bg-background overflow-hidden">      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                  Success Stories
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
                Closing Deals,
                <br />
                <span className="font-medium">Collecting Results</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                Watch our track record of successful deal closures unfold in real-time. 
                Every card represents millions in collected revenue.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div className="space-y-3">
                <div className="text-3xl font-medium">$18.4M+</div>
                <div className="text-sm text-muted-foreground">Total Collected</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-medium">94.7</span>
                  <span className="text-xl text-muted-foreground">%</span>
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            <button className="group bg-foreground text-background px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]">
              <span className="flex items-center gap-2">
                Start Your Deal
                <TrendingUp className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Visual Side - Clean TiltedScroll without container */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-[2rem] blur-3xl scale-150"></div>
              
              {/* TiltedScroll component - no container */}
              <div className="relative">
                <TiltedScroll 
                  items={closedDeals}
                  className="scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosedDealsSection;
