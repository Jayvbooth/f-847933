
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className,
  variant = 'default'
}) => {
  // Determine the border color based on variant
  const getBorderColor = () => {
    switch (variant) {
      case 'default':
        return 'border-primary-foreground/60';
      case 'destructive':
        return 'border-destructive-foreground/60';
      case 'outline':
        return 'border-primary/60';
      case 'secondary':
        return 'border-secondary-foreground/60';
      case 'ghost':
        return 'border-accent-foreground/60';
      case 'link':
        return 'border-primary/60';
      default:
        return 'border-foreground/60';
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Animated border - rotating gradient */}
      <div className="absolute inset-0 rounded-md overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 rounded-md border-2",
            "bg-gradient-to-r from-transparent via-current to-transparent",
            "animate-spin",
            getBorderColor()
          )}
          style={{
            background: `conic-gradient(from 0deg, transparent, currentColor, transparent, transparent)`,
            animationDuration: '3s'
          }}
        />
      </div>
      
      {/* Inner content with slight padding to show border */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
