"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative w-full">
      {/* Background glow (responsive sizes, decorative) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden
      >
        <div
          className="rounded-full opacity-20 bg-primary blur-[140px] w-[420px] h-[140px] sm:w-[600px] sm:h-[180px] md:w-[816px] md:h-[252px]"
          style={{ background: "var(--color-primary)" }}
        />
      </div>

      {/* Header content */}
      <div className="relative z-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              className="flex justify-center py-4 sm:py-4 md:py-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <motion.div
                  className="mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Responsive wrapper: explicit width/height via Tailwind at each breakpoint */}
                  <div className="relative mx-auto w-[80px] h-[18px] sm:w-[100px] sm:h-[22px] md:w-[120px] md:h-[27px]">
                    <Image
                      src="/images/logo.png"
                      alt="Ena Ema Technologies Logo"
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
