
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
        return 'text-primary-foreground/30';
      case 'destructive':
        return 'text-destructive-foreground/30';
      case 'outline':
        return 'text-foreground/30';
      case 'secondary':
        return 'text-secondary-foreground/30';
      case 'ghost':
        return 'text-accent-foreground/30';
      case 'link':
        return 'text-primary/30';
      default:
        return 'text-foreground/30';
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Animated border */}
      <div className="absolute inset-0 rounded-md overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 rounded-md",
            "before:absolute before:inset-0 before:rounded-md before:p-[1px]",
            "before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent",
            "before:animate-spin before:content-['']",
            getBorderColor()
          )}
          style={{
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          }}
        />
      </div>
      {children}
    </div>
  );
};
