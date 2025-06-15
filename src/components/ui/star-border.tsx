
import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "3s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--primary))"

  return (
    <Component 
      className={cn(
        "relative overflow-hidden",
        className
      )} 
      {...props}
    >
      {/* Animated border trail */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-75"
        style={{
          background: `conic-gradient(from 0deg, transparent, transparent, ${defaultColor}, transparent, transparent)`,
          animation: `spin ${speed} linear infinite`,
        }}
      />
      
      {/* Inner content with slight inset to show the border */}
      <div className={cn(
        "relative bg-inherit rounded-[inherit] m-[1px]",
        "flex items-center justify-center"
      )}>
        {children}
      </div>
    </Component>
  )
}
