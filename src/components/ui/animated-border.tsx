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
  shimmerColor = "#fff",
  shimmerSize = "0.11em", // default = 2px on ~18px text
  shimmerDuration = "2.8s",
  borderRadius = "0.5rem",
  style,
}) => {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        borderRadius,
        ...style,
      } as CSSProperties}
    >
      {/* Outer shimmer border */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute z-10 inset-0",
          "before:absolute before:inset-0 before:rounded-[var(--radius)] before:pointer-events-none",
          "before:content-['']"
        )}
        style={{
          borderRadius: "var(--radius)",
          padding: "var(--cut)",
          inset: 0,
          display: "block",
        }}
      >
        <span
          className="block w-full h-full"
          style={{
            borderRadius: "var(--radius)",
            background: `conic-gradient(from 0deg, transparent, var(--shimmer-color), transparent 55%, transparent 100%)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: "shimmer-spin var(--speed) linear infinite",
          }}
        />
      </span>

      {/* Button itself (unchanged, no weird padding/size) */}
      <div
        className="relative z-20"
        style={{
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      {/* Keyframes */}
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
