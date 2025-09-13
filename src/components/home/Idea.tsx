"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Rocket, Palette, LucideIcon } from "lucide-react";

// Types
interface ProcessStep {
  day: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
}

// Process Step Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ step, index }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        delay: index * 0.2 + 0.3,
        duration: 0.4,
        type: "spring" as const,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.2 + 0.1, duration: 0.4 },
    },
  };

  const IconComponent = step.icon;

  return (
    <motion.div
      className="relative bg-card rounded-lg p-9 text-center"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Day Badge */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-3.5 px-2 rounded-full border border-primary bg-background"
        variants={badgeVariants}
        initial="initial"
        animate="animate"
      >
        <span className="text-general-sans-12 text-primary">{step.day}</span>
      </motion.div>

      {/* Icon */}
      <motion.div
        className="inline-flex items-center justify-center p-6 rounded-full bg-foreground mb-9"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <IconComponent className="w-9 h-9 text-primary" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
      >
        <h3 className="text-xl font-medium text-light mb-2 font-general-sans">
          {step.title}
        </h3>
        <p className="text-general-sans-14 text-secondary-light">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Main Idea Section Component
const IdeaSection: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      day: "Day 1",
      icon: User,
      title: "Book Your Project",
      description: "Fill out a short form and we'll get started immediately.",
    },
    {
      day: "Day 2-4",
      icon: Palette,
      title: "Design & Development",
      description:
        "Unlimited revisions until perfect. You're involved every step.",
    },
    {
      day: "Day 5",
      icon: Rocket,
      title: "Launch",
      description:
        "Fully deployed on your hosting and ready to convert visitors.",
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

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <section className="relative py-30">
      {/* Left Blur Effect */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          width: "204px",
          height: "204px",
          flexShrink: 0,
          backgroundColor: "var(--color-primary, #1FFFA5)",
          filter: "blur(300px)",
          borderRadius: "50%",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-manrope-medium-48 text-light mb-2 tracking-tight"
              variants={headerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              From Idea to Live Landing Page in{" "}
              <span className="text-primary">Just 5 Days</span>
            </motion.h2>

            <motion.p
              className="text-general-sans-16 text-light"
              variants={titleVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our streamlined process ensures fast delivery without compromising
              quality.
            </motion.p>
          </div>

          {/* Process Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
