"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { CustomButton } from "../ui/core/CSBUTTON/CustomButton";

// Types
interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PlanCardProps {
  plan: Plan;
  index: number;
  isHovered: boolean;
  setHoveredCard: (index: number | null) => void;
}

// Plan Card Component
const PlanCard = ({
  plan,
  index,
  isHovered,
  setHoveredCard,
}: PlanCardProps) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    initial: {
      backgroundColor: "var(--color-foreground)",
      color: "var(--color-primary-light)",
      boxShadow: "none",
    },
    hover: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-primary-dark)",
      boxShadow:
        "0 7px 8px 0 rgba(255, 255, 255, 0.50) inset, 0 9px 24px 0 rgba(31, 255, 165, 0.25)",
    },
  };

  return (
    <motion.div
      className={`relative bg-card rounded-2xl p-9 flex flex-col ${
        isHovered && plan.name === "Standard" ? "border-2 border-primary" : ""
      }`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      {/* Most Popular Badge */}
      {isHovered && plan.name === "Standard" && (
        <motion.div
          className="absolute left-5 -top-4 px-3 py-2 rounded-full border-2 border-primary bg-background"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-general-sans-12 text-primary font-medium">
            Most Popular
          </span>
        </motion.div>
      )}

      {/* Plan Header */}
      <div className="flex items-center justify-between mb-2 text-manrope-bold-24 ">
        <h3 className="text-light">{plan.name}</h3>
        <span className=" text-primary">${plan.price}</span>
      </div>

      {/* Plan Description */}
      <p className="text-general-sans-14 text-light">{plan.description}</p>

      {/* Divider */}
      <div className="w-full h-px bg-stroke my-12"></div>

      {/* Features List */}
      <div className="space-y-3 mb-12 flex-1">
        {plan.features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.4 }}
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-general-sans-12 text-secondary-light">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button - Now responds to card hover */}
      <motion.button
        className="w-full px-8 py-4 rounded-lg text-general-sans-medium-16 font-medium transition-all duration-300"
        variants={buttonVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        whileHover="hover"
        style={{
          backgroundColor: isHovered
            ? "var(--color-primary)"
            : "var(--color-foreground)",
          color: isHovered
            ? "var(--color-primary-dark)"
            : "var(--color-primary-light)",
          boxShadow: isHovered
            ? "0 7px 8px 0 rgba(255, 255, 255, 0.50) inset, 0 9px 24px 0 rgba(31, 255, 165, 0.25)"
            : "none",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          Start my project
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.button>
    </motion.div>
  );
};

const PricingPlanSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans: Plan[] = [
    {
      name: "Basic",
      price: "200",
      description: "Perfect for solopreneurs",
      features: [
        "1 Landing Page (Design + Development)",
        "Hosting Deployment",
        "5-Day Delivery",
        "Basic Support",
      ],
    },
    {
      name: "Standard",
      price: "400",
      description: "Best balance of value & features",
      features: [
        "Everything in Basic",
        "Extra Custom Section",
        "Free Hosting Setup",
        "Free Consultation Call",
        "Priority Support",
      ],
    },
    {
      name: "Premium",
      price: "500",
      description: "For brands & agencies",
      features: [
        "Everything in Standard",
        "Advanced Animations",
        "Priority Delivery (3 Days)",
        "6 Months Free Support",
        "Performance Optimization",
      ],
    },
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-30 bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            variants={headerVariants}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-manrope-medium-48 text-light mb-2 tracking-tight text-left">
              Simple, Transparent Pricing —{" "}
              <span className="text-primary">Choose Your Plan</span>
            </h2>
            <p className="text-general-sans-16 text-light text-left">
              No hidden fees, no surprises. Just premium landing pages at
              unbeatable prices.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {plans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={index}
                isHovered={hoveredCard === index}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </motion.div>

          {/* Limited Availability */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Zap className="w-9 h-9 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-manrope-bold-24 text-light mb-2">
                Limited Availability
              </h3>
              <p className="text-general-sans-14 text-secondary-light">
                We only onboard 5 new clients per month. 2 spots left for this
                month — secure yours today.
              </p>
            </div>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            className="bg-card rounded-2xl py-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h2 className="text-manrope-medium-48 text-light mb-2 tracking-tight">
              Special Offer For Early Clients
            </h2>
            <p className="text-general-sans-16 text-light mb-12">
              Get 10% OFF + Free Hosting Setup when you book this week.
            </p>
            <CustomButton className="flex items-center justify-center gap-3">
              Claim my 10% discount <ArrowRight className="w-4 h-4" />
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSection;
