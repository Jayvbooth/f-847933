
import React from 'react';
import { motion } from 'motion/react';

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
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h5 className="text-xs uppercase tracking-wide text-muted-foreground mb-4">Trusted Partnerships</h5>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              We connect our clients with{" "}
              <span className="text-primary">industry leaders</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our lead generation process targets decision-makers at top-tier companies across 
              SaaS, marketing agencies, and B2B enterprises worldwide.
            </p>
          </motion.div>
        </div>

        {/* Animated Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {TRUSTED_BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 w-full h-20 group"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-8 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-sm font-medium text-muted-foreground">${brand.name}</span>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Definition Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How do we define a <span className="text-primary">'high-quality lead'</span>?
              </h3>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                It's simple. You'll connect exclusively with companies that match your 
                <span className="text-foreground font-semibold"> Ideal Client Profile</span>—defined by you.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you're targeting SaaS companies, marketing agencies, or other B2B enterprises, 
                we ensure every lead has the potential to convert with prospects that are the perfect 
                fit for your business model and growth objectives.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['SaaS Companies', 'Marketing Agencies', 'Tech Startups', 'Enterprise B2B'].map((category, index) => (
                  <motion.span
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
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
