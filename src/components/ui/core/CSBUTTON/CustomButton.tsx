"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
  children: React.ReactNode;
  width?: "auto" | "full" | string | number;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      loading = false,
      children,
      disabled,
      width = "auto",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]";

    const variants = {
      primary: `
        bg-primary
        text-primary-dark
        hover:bg-primary-light
        focus:ring-2
        focus:ring-primary/20
      `,
      secondary: `
        bg-card
        text-light
        border
        border-stroke
        hover:bg-stroke/20
        focus:ring-2
        focus:ring-stroke/20
      `,
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-base rounded-lg",
    };

    // Handle width classes and styles
    const getWidthStyle = () => {
      if (width === "full") return "w-full";
      if (width === "auto") return "";
      return ""; // For custom width values, we'll use inline styles
    };

    const getInlineWidthStyle = () => {
      if (typeof width === "string" && width !== "full" && width !== "auto") {
        return { width };
      }
      if (typeof width === "number") {
        return { width: `${width}px` };
      }
      return {};
    };

    const primaryButtonStyle =
      variant === "primary"
        ? {
            boxShadow:
              "0 7px 8px 0 rgba(255, 255, 255, 0.50) inset, 0 9px 24px 0 rgba(31, 255, 165, 0.25)",
            fontFamily: "var(--font-general-sans)",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "normal",
            ...getInlineWidthStyle(),
          }
        : {
            ...getInlineWidthStyle(),
          };

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${
          sizes[size]
        } ${getWidthStyle()} ${className}`}
        style={primaryButtonStyle}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        {...props}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
            Processing...
          </>
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon className="w-4 h-4 mr-2" />
            )}
            {children}
            {Icon && iconPosition === "right" && (
              <Icon className="w-4 h-4 ml-2" />
            )}
          </>
        )}
      </motion.button>
    );
  }
);

CustomButton.displayName = "CustomButton";
