import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const pricingPlans = [
  {
    title: 'Starter',
    priceMonthly: 0,
    priceAnnually: 0,
    description: 'Free plan for individuals and small teams to get started.',
    features: [
      'Up to 5 team members',
      'Basic analytics dashboard',
      'Limited integrations',
      'Community support'
    ],
    isPopular: false,
  },
  {
    title: 'Pro',
    priceMonthly: 29,
    priceAnnually: 290,
    description: 'Advanced features for growing businesses.',
    features: [
      'Unlimited team members',
      'Advanced analytics dashboard',
      'Priority support',
      'Custom integrations',
      'Dedicated account manager'
    ],
    isPopular: true,
  },
  {
    title: 'Enterprise',
    priceMonthly: 99,
    priceAnnually: 990,
    description: 'Premium plan for large organizations with advanced needs.',
    features: [
      'Everything in Pro, plus:',
      'Dedicated success manager',
      'White-labeling options',
      'Customizable security settings',
      '24/7 premium support'
    ],
    isPopular: false,
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pricing-grid-subtle opacity-5"></div>
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Star className="w-4 h-4" />
            Pricing Plans
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Choose the{" "}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <em className="italic">perfect</em>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.span>
            {" "}plan for your business
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transparent pricing with no hidden fees. Start free and scale as you grow.
          </motion.p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className="text-muted-foreground mr-4">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="w-14 h-7 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-muted/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-muted after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-muted peer-checked:bg-primary"></div>
            </label>
            <span className="text-muted-foreground ml-4">Annually</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={cn(
                "bg-card border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
                plan.isPopular ? "order-first md:order-none" : ""
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 w-full h-12 bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center rounded-t-2xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6 space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">{plan.title}</h3>
                <div className="text-5xl font-bold text-foreground">
                  ${isAnnual ? plan.priceAnnually : plan.priceMonthly}
                  <span className="text-lg text-muted-foreground ml-1">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
