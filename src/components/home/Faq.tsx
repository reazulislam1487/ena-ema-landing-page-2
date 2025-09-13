"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "How long does it take?",
      answer:
        "5 days from start to finish - design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, unlimited revisions until you're 100% satisfied with the final result.",
    },
    {
      question: "What's the payment process?",
      answer:
        "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer:
        "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-30">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Title */}
          <motion.h2
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12 text-manrope-medium-48 text-light tracking-tight"
          >
            Got Questions
            <span className="text-primary">?</span> We've Got The Answers
          </motion.h2>
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* FAQ Container */}
            <motion.div
              variants={containerVariants}
              className="w-full max-w-[912px] space-y-6"
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className=" space-y-6 p-6 rounded-xl bg-card cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Dot on the left */}
                  <motion.div
                    className="flex-shrink-0 w-3 h-3 rounded-full"
                    animate={{
                      backgroundColor:
                        activeIndex === index
                          ? "var(--color-primary, #1FFFA5)"
                          : "var(--color-text-secondary-light, #666666)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor:
                        activeIndex === index
                          ? "var(--color-primary, #1FFFA5)"
                          : "var(--color-text-secondary-light, #666666)",
                    }}
                  />

                  {/* Content area - Question and Answer */}
                  <div className="min-w-0">
                    {/* Question */}
                    <motion.h4
                      className="text-manrope-bold-24 font-normal text-light"
                      style={{
                        marginBottom: activeIndex === index ? "16px" : "0px",
                      }}
                      animate={{
                        marginBottom: activeIndex === index ? "16px" : "0px",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.question}
                    </motion.h4>

                    {/* Answer - positioned below question, aligned with question text */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-general-sans-18 text-secondary-light"
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
