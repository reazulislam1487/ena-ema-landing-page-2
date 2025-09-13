"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";

// Duplicate testimonials to ensure smooth looping
const originalTestimonials = [
  {
    id: 1,
    text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "Sarah Johnson",
    designation: "SaaS Founder",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    text: "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    name: "Mike Chen",
    designation: "Fitness Coach",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    text: "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    name: "Amanda Rodriguez",
    designation: "E-Commerce Owner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    name: "David Lee",
    designation: "SaaS Founder",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

// Create multiple copies for smooth infinite loop
const testimonials = [
  ...originalTestimonials,
  ...originalTestimonials.map((item) => ({ ...item, id: item.id + 100 })),
  ...originalTestimonials.map((item) => ({ ...item, id: item.id + 200 })),
];

const TestimonialsSection = () => {
  const swiperRef = useRef<any>(null);

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

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="py-30 bg-background">
      <div className="w-full">
        {/* Header with left padding */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-left mb-12">
              <motion.h2
                className="text-manrope-medium-48 text-light mb-2 tracking-tight"
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                What Our Clients Are Saying{" "}
                <span className="text-primary">About Us</span>
              </motion.h2>
              <motion.p
                className="text-general-sans-16 text-light"
                variants={titleVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Real feedback from real businesses who've seen real results.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Slider container - calculated left margin for 1200px content width */}
        <div className="w-full overflow-hidden">
          <div
            className="ml-[calc((100vw-1200px)/2)] xl:ml-[360px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              slidesPerGroup={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={800}
              centeredSlides={false}
              freeMode={false}
              watchOverflow={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={`${testimonial.id}-${index}`}
                  style={{ width: "380px" }}
                >
                  <motion.div
                    className="h-full bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={16}
                          className="text-primary fill-primary"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-9 text-general-sans-16 text-light leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          width={36}
                          height={36}
                          className="rounded-full object-cover w-full h-full"
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="text-general-sans-16 text-light font-medium truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-general-sans-12 text-secondary-light truncate">
                          {testimonial.designation}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
