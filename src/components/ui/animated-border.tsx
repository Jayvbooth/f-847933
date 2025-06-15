
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  shimmerColor?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  shimmerSize?: string;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className,
  variant = "default",
  shimmerColor = "#fff",
  shimmerDuration = "2.8s",
  borderRadius = "0.5rem", // default rounded-md
  shimmerSize = "4px", // border thickness
}) => {
  // Pick a reasonable border thickness for shimmer
  // No changes to button itself
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ borderRadius }}
    >
      {/* Shimmer border */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          borderRadius,
          padding: shimmerSize,
          // Extra border-sizing trick to prevent overlay on content
        }}
      >
        <span
          className={cn(
            "block w-full h-full"
          )}
          style={{
            borderRadius,
            background: `conic-gradient(from 0deg, transparent, ${shimmerColor}, transparent 55%, transparent 100%)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: `shimmer-spin ${shimmerDuration} linear infinite`,
          }}
        ></span>
      </span>
      {/* Button (content) */}
      <div
        className="relative z-20"
        style={{
          borderRadius,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      {/* Style for shimmer-spin keyframes */}
      <style>
        {`
          @keyframes shimmer-spin {
            0% { transform: rotate(0deg);}
            100%{ transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

