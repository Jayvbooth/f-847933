import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, LucideIcon, MapIcon } from 'lucide-react'
import { ReactNode, useEffect, useRef, useState } from 'react'

export function Features() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="bg-background py-16 md:py-32 relative overflow-hidden">
            {/* Subtle grid background with gradient overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            {/* Animated heading */}
            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl mb-16 relative z-10">
                <div className={cn(
                    "text-center transition-all duration-1000 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-shift bg-300% leading-tight">
                        Advanced Fleet Management
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real-time tracking and intelligent scheduling for modern fleet operations
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl relative z-10">
                <div className="mx-auto grid gap-6 lg:grid-cols-2">
                    <AnimatedFeatureCard delay={200}>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={MapIcon}
                                title="Real time location tracking"
                                description="Advanced tracking system, Instantly locate all your assets."
                            />
                        </CardHeader>

                        <div className="relative mb-6 border-t border-dashed sm:mb-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/10 to-transparent"></div>
                            <div className="aspect-[76/59] p-1 px-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1207&h=929&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1207&h=929&fit=crop"
                                    alt="real time tracking illustration"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </AnimatedFeatureCard>

                    <AnimatedFeatureCard delay={400}>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Calendar}
                                title="Advanced Scheduling"
                                description="Scheduling system, Instantly locate all your assets."
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 bg-gradient-to-br from-background via-transparent to-muted/10"></div>
                                <div className="aspect-[76/59] border border-border/50 rounded-lg overflow-hidden">
                                    <DualModeImage
                                        darkSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1207&h=929&fit=crop"
                                        lightSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1207&h=929&fit=crop"
                                        alt="calendar illustration"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </AnimatedFeatureCard>

                    <AnimatedFeatureCard className="p-6 lg:col-span-2" delay={600}>
                        <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">Smart scheduling with automated reminders for maintenance.</p>

                        <div className="flex justify-center gap-6 overflow-hidden">
                            <CircularUI
                                label="Inclusion"
                                circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                            />

                            <CircularUI
                                label="Inclusion"
                                circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                            />

                            <CircularUI
                                label="Join"
                                circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                            />

                            <CircularUI
                                label="Exclusion"
                                circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                className="hidden sm:block"
                            />
                        </div>
                    </AnimatedFeatureCard>
                </div>
            </div>
        </section>
    )
}

interface AnimatedFeatureCardProps {
    children: ReactNode
    className?: string
    delay?: number
}

const AnimatedFeatureCard = ({ children, className, delay = 0 }: AnimatedFeatureCardProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay)
                }
            },
            { threshold: 0.1 }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={cardRef}
            className={cn(
                "transition-all duration-700 ease-out transform",
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            )}
        >
            <Card className={cn(
                'group relative rounded-lg shadow-lg border-border/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out bg-card/80 backdrop-blur-sm', 
                className
            )}>
                <CardDecorator />
                {children}
            </Card>
        </div>
    )
}

const CardDecorator = () => (
    <>
        <span className="border-primary/60 absolute -left-px -top-px block size-2 border-l-2 border-t-2 transition-colors group-hover:border-primary"></span>
        <span className="border-primary/60 absolute -right-px -top-px block size-2 border-r-2 border-t-2 transition-colors group-hover:border-primary"></span>
        <span className="border-primary/60 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 transition-colors group-hover:border-primary"></span>
        <span className="border-primary/60 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 transition-colors group-hover:border-primary"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-muted-foreground flex items-center gap-2">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-8 text-2xl font-semibold">{description}</p>
    </div>
)

interface DualModeImageProps {
    darkSrc: string
    lightSrc: string
    alt: string
    width: number
    height: number
    className?: string
}

const DualModeImage = ({ darkSrc, lightSrc, alt, width, height, className }: DualModeImageProps) => (
    <>
        <img
            src={darkSrc}
            className={cn('hidden dark:block w-full h-full object-cover', className)}
            alt={`${alt} dark`}
            width={width}
            height={height}
        />
        <img
            src={lightSrc}
            className={cn('dark:hidden w-full h-full object-cover', className)}
            alt={`${alt} light`}
            width={width}
            height={height}
        />
    </>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'blue'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={className}>
        <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
            <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-7 rounded-full border sm:size-8', {
                            'border-primary': circle.pattern === 'none',
                            'border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'border',
                            'border-primary bg-background bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'primary',
                            'bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'blue',
                        })}></div>
                ))}
            </div>
        </div>
        <span className="text-muted-foreground mt-1.5 block text-center text-sm">{label}</span>
    </div>
)
