
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const TRUSTED_BRANDS = [
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com" },
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
  { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Atlassian", logo: "https://logo.clearbit.com/atlassian.com" }
];

const TrustedBrands = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </motion.div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with advanced animations */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity: textOpacity }}
            className="max-w-4xl mx-auto"
          >
            <motion.h5 
              className="text-xs uppercase tracking-wide text-muted-foreground mb-4"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Trusted Partnerships
            </motion.h5>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We connect our clients with{" "}
              <motion.span 
                className="text-primary relative inline-block"
                whileInView={{ 
                  backgroundSize: ["0% 2px", "100% 2px"],
                }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{
                  backgroundImage: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)))",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom left",
                }}
              >
                industry leaders
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our lead generation process targets decision-makers at top-tier companies across 
              SaaS, marketing agencies, and B2B enterprises worldwide.
            </motion.p>
          </motion.div>
        </div>

        {/* Premium animated logo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {TRUSTED_BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotateY: -45,
                  z: -100
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: 0,
                  z: 0
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{ scale: logoScale }}
                className="flex items-center justify-center p-6 rounded-xl bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all duration-500 w-full h-24 group relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ boxShadow: "0 0 0 0 rgba(255,255,255,0)" }}
                  whileHover={{ 
                    boxShadow: "0 0 30px 0 rgba(255,255,255,0.1), inset 0 0 30px 0 rgba(255,255,255,0.05)" 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-10 max-w-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-sm font-medium text-muted-foreground relative z-10">${brand.name}</span>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced quality definition section */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto perspective-1000"
        >
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-border/60 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            
            <div className="text-center mb-8 relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                How do we define a{" "}
                <motion.span 
                  className="text-primary relative"
                  whileInView={{
                    textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
                >
                  'high-quality lead'
                </motion.span>
                ?
              </motion.h3>
            </div>
            
            <div className="space-y-6 text-center relative z-10">
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                It's simple. You'll connect exclusively with companies that match your 
                <motion.span 
                  className="text-foreground font-semibold"
                  whileInView={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                > Ideal Client Profile</motion.span>—defined by you.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Whether you're targeting SaaS companies, marketing agencies, or other B2B enterprises, 
                we ensure every lead has the potential to convert with prospects that are the perfect 
                fit for your business model and growth objectives.
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['SaaS Companies', 'Marketing Agencies', 'Tech Startups', 'Enterprise B2B'].map((category, index) => (
                  <motion.span
                    key={category}
                    initial={{ opacity: 0, scale: 0, rotateZ: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    {category}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
