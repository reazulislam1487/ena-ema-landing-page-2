"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";

type CaseStudySliderProps = {
  images: string[];
};

const CaseStudySlider = ({ images }: CaseStudySliderProps) => {
  return (
    <section
      className="w-full bg-background py-30 overflow-hidden"
      style={{
        backgroundColor: "var(--color-background, #151E1B)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
            1440: { slidesPerView: 2 },
          }}
          className="!overflow-visible"
          style={{
            width: "100vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {images.concat(images).map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Image
                  src={src}
                  alt={`Case Study ${(i % images.length) + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                  priority={i < 4}
                />
                {/* Overlay gradient for better visual effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};
export default CaseStudySlider;
