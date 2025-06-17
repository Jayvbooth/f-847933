
import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.8)",
  shimmerSize = "1px",
  shimmerDuration = "3s",
  borderRadius = "0.375rem",
  style,
}) => {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--border-width": shimmerSize,
        borderRadius,
        ...style,
      } as CSSProperties}
    >
      {/* Shimmer border animation */}
      <div
        className="absolute inset-0 rounded-[var(--radius)] overflow-hidden pointer-events-none"
        style={{
          padding: "var(--border-width)",
        }}
      >
        <div
          className="w-full h-full rounded-[var(--radius)]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, var(--shimmer-color) 60deg, transparent 120deg, transparent 240deg, var(--shimmer-color) 300deg, transparent 360deg)`,
            animation: `shimmer-rotate var(--speed) linear infinite`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 rounded-[var(--radius)]">
        {children}
      </div>

      {/* Keyframes */}
      <style>
        {`
        @keyframes shimmer-rotate {
          0% { 
            transform: rotate(0deg);
          }
          100% { 
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </div>
  );
};
