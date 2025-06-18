
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 1,
    question: "What makes your lead generation service different from others?",
    answer: "We focus exclusively on high-quality, pre-qualified leads that match your exact Ideal Client Profile. Our advanced targeting ensures you connect with decision-makers at companies that are genuinely interested in your services, resulting in higher conversion rates and better ROI."
  },
  {
    id: 2,
    question: "How quickly can I expect to see results?",
    answer: "Most clients start receiving qualified leads within 7-14 days of campaign launch. However, the quality of leads and conversion rates typically improve over the first 30 days as we optimize your targeting based on initial performance data."
  },
  {
    id: 3,
    question: "What types of companies do you target?",
    answer: "We specialize in B2B companies including SaaS startups, marketing agencies, tech companies, and enterprise businesses. Our targeting capabilities allow us to reach decision-makers across various industries based on your specific requirements."
  },
  {
    id: 4,
    question: "How do you ensure lead quality?",
    answer: "Every lead goes through our proprietary qualification process that includes company size verification, decision-maker identification, budget confirmation, and timeline assessment. We only deliver leads that meet your predefined criteria."
  },
  {
    id: 5,
    question: "What's included in your service?",
    answer: "Our comprehensive service includes lead research, multi-channel outreach campaigns, CRM integration, detailed analytics and reporting, A/B testing, and dedicated account management to ensure optimal performance."
  },
  {
    id: 6,
    question: "Can I customize my targeting criteria?",
    answer: "Absolutely. We work closely with you to define your Ideal Client Profile including company size, industry, geographic location, technology stack, funding status, and any other specific criteria that define your perfect customer."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            Frequently Asked Questions
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Got{" "}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <em className="italic">questions</em>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />
            </motion.span>
            ?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Find answers to the most common questions about our lead generation services and how we can help grow your business.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-border/60 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 relative">
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Question */}
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 relative z-10"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed pr-4">
                    {item.question}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <AnimatePresence mode="wait">
                      {openItems.includes(item.id) ? (
                        <motion.div
                          key="minus"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeInOut",
                        opacity: { duration: 0.3 }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-6 md:px-8 pb-6 md:pb-8 relative z-10"
                      >
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                          {item.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-border/60 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 2px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Still have questions?
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Our team is here to help you understand how our lead generation service can transform your business.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary-foreground hover:text-primary border border-transparent hover:border-primary transition-all duration-300 relative z-10"
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
