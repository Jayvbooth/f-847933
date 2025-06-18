
import React from 'react';
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';
import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, Target, BarChart3, Zap } from 'lucide-react';

const stackingCards = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Revenue Growth",
    metric: "320%",
    description: "Average revenue increase for our clients in the first year",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 2,
    icon: Users,
    title: "Lead Quality",
    metric: "95%",
    description: "Qualified leads that convert to paying customers",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Cost Reduction",
    metric: "60%",
    description: "Lower customer acquisition costs with our platform",
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 4,
    icon: Target,
    title: "Conversion Rate",
    metric: "85%",
    description: "Higher conversion rates with optimized workflows",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: BarChart3,
    title: "ROI Improvement",
    metric: "450%",
    description: "Return on investment within 6 months of implementation",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    icon: Zap,
    title: "Processing Speed",
    metric: "10x",
    description: "Faster lead processing and response times",
    color: "from-yellow-500 to-amber-500"
  }
];

const StackingCardsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-border/50 mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Performance Metrics</span>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Results that speak{" "}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <em className="italic">louder</em>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              />
            </motion.span>
            {" "}than words
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See the measurable impact our platform delivers for businesses like yours
          </motion.p>
        </motion.div>

        {/* Stacking Cards */}
        <div className="max-w-4xl mx-auto">
          <ContainerScroll className="h-[800px]">
            {stackingCards.map((card, index) => (
              <CardSticky
                key={card.id}
                index={index}
                incrementY={20}
                incrementZ={10}
                className="w-full max-w-2xl mx-auto"
              >
                <motion.div
                  className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-foreground">{card.title}</h3>
                        <div className={`text-4xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                          {card.metric}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default StackingCardsSection;
