"use client";
import {
  Rocket,
  Zap,
  DollarSign,
  RefreshCw,
  Trophy,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import CustomCard from "../ui/core/CSCARD/CustomCard";

const Trust = () => {
  const trustData = [
    {
      icon: Rocket,
      title: "Proven Conversion Framework",
      description:
        "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    },
    {
      icon: Palette,
      title: "Agency Level Design",
      description:
        "Modern, premium, and tailored for your brand - without the agency price tag.",
    },
    {
      icon: Zap,
      title: "5-day Guaranteed Delivery",
      description:
        "With a highly professional team, we deliver on time, everything.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "No hidden fees, just clear value. What you see is what you pay.",
    },
    {
      icon: RefreshCw,
      title: "Revisions Until You're Happy",
      description:
        "We keep working until it's right. Your satisfaction is guaranteed.",
    },
    {
      icon: Trophy,
      title: "Results That Speak",
      description:
        "Our pages consistently outperform industry averages for conversions.",
    },
  ];

  return (
    <section className="pb-30 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-manrope-medium-48 text-light mb-2 tracking-tight">
              Why Businesses <span className="text-primary">Trust Us</span> With
              Their Designs
            </h2>
            <p className="text-general-sans-16 text-light mx-auto">
              We combine proven conversion frameworks with agency-level design
              to deliver results that matter.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {trustData.map((item, index) => (
              <CustomCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
