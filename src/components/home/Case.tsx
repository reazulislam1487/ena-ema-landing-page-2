"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CaseStudyCard from "../ui/core/CaseStudyCard";
import { CustomButton } from "../ui/core/CSBUTTON/CustomButton";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    image: "/images/case1.png",
    websiteName: "EventFlow",
    badges: [
      "20% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    id: 2,
    image: "/images/case2.png",
    websiteName: "Flowpilot",
    badges: [
      "20% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    id: 3,
    image: "/images/case3.png",
    websiteName: "GrowthSummit",
    badges: [
      "20% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    id: 4,
    image: "/images/case1.png",
    websiteName: "TechStart",
    badges: [
      "25% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    id: 5,
    image: "/images/case2.png",
    websiteName: "DataFlow",
    badges: [
      "30% high conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-30 bg-background-dark">
      <div className="w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-manrope-medium-48 text-light mb-2 tracking-tight">
            Case Studies
          </h2>
          <p className="text-general-sans-16 text-light">
            See the designs that delivered results
          </p>
        </motion.div>

        {/* Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!px-4 sm:!px-6 lg:!px-8"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <CaseStudyCard
                  image={study.image}
                  websiteName={study.websiteName}
                  badges={study.badges}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <CustomButton icon={ArrowRight} iconPosition="right">
            I want similar results
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
