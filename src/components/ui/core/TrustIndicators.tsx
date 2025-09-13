"use client";
import { motion, Variants } from "framer-motion";
import { Shield, RotateCcw, CheckCircle, LucideIcon } from "lucide-react";

interface TrustIndicator {
  icon: LucideIcon;
  text: string;
}

export const TrustIndicators = () => {
  const indicators: TrustIndicator[] = [
    { icon: Shield, text: "SSL secure" },
    { icon: RotateCcw, text: "Money-back guaranteed" },
    { icon: CheckCircle, text: "Satisfaction guaranteed" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-4 pt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {indicators.map(({ icon: Icon, text }, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 flex-shrink-0 cursor-default"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
          >
            <Icon className="w-4 h-4 text-secondary-light flex-shrink-0 transition-colors duration-300 hover:text-blue-500" />
          </motion.div>
          <motion.span
            className="text-general-sans-12 text-secondary-light whitespace-nowrap text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700"
            whileHover={{
              x: 2,
              transition: { duration: 0.2 },
            }}
          >
            {text}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};
