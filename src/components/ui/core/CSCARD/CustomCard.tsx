"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type TrustCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

const CustomCard = ({
  icon: Icon,
  title,
  description,
  index,
}: TrustCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-start">
        <Icon className="w-12 h-12 text-primary mb-9" />
        <h3 className="text-manrope-medium-16 text-light mb-3">{title}</h3>
        <p className="text-general-sans-14 text-secondary-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CustomCard;
