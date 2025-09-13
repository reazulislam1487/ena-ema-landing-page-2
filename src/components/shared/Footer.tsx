"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Linkedin,
  Facebook,
  Instagram,
  Dribbble,
  LucideIcon,
} from "lucide-react";

// Types
interface SocialLink {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  color: string;
}

// Custom Behance Icon Component
const BehanceIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    className={className}
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "#0077B5",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "#E4405F",
    },
    {
      name: "Behance",
      icon: BehanceIcon,
      href: "#",
      color: "#1769FF",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      href: "#",
      color: "#EA4C89",
    },
  ];

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

  const logoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
        backgroundColor: "var(--color-primary, #1FFFA5)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {/* Logo */}
            <motion.div className="flex-shrink-0" variants={logoVariants}>
              <Image
                src="/images/footer-logo.png"
                alt="Ena Ema Technologies Logo"
                width={120}
                height={40}
                className="h-auto w-auto max-h-10"
                priority
              />
            </motion.div>

            {/* Copyright Text */}
            <motion.p
              className="text-center flex-1 order-3 sm:order-2"
              variants={itemVariants}
              style={{
                color: "var(--color-background-dark, #0A0F0D)",
                fontFamily: 'var(--font-general-sans, "General Sans")',
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                letterSpacing: "0px",
              }}
            >
              © All rights reserved to Ena Ema Technologies
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-4 order-2 sm:order-3"
              variants={socialVariants}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="social-icon-link"
                    variants={socialItemVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      color: social.color,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      color: "var(--color-background-dark, #0A0F0D)",
                    }}
                    aria-label={social.name}
                  >
                    <IconComponent
                      {...(social.name === "Behance" ? {} : { size: 24 })}
                      className="w-6 h-6"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
