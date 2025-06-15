
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className,
  variant = 'default'
}) => {
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
            variant === 'default' 
              ? "text-primary-foreground/30" 
              : "text-foreground/30"
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
