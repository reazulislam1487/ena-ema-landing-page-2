"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import { FormContainer } from "../ui/core/FormContainer";
import { TrustIndicators } from "../ui/core/TrustIndicators";
import { CustomInput } from "../ui/core/CSINPUT/CustomInput";
import { CustomButton } from "../ui/core/CSBUTTON/CustomButton";

// TypeScript interfaces
interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error";
}

// Toast Component
const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.3 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 500,
          }}
          className="fixed top-4 right-4 z-50 max-w-md"
        >
          <div
            className={`
            px-6 py-4 rounded-xl shadow-2xl border backdrop-blur-lg
            ${
              type === "success"
                ? "bg-green-900/90 border-green-500/50 text-green-100"
                : "bg-red-900/90 border-red-500/50 text-red-100"
            }
          `}
          >
            <div className="flex items-center gap-3">
              {type === "success" ? (
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              )}
              <p className="text-sm font-medium">{message}</p>
              <button
                onClick={onClose}
                className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "success",
  });

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 3) return "Name must be at least 3 characters";
    if (!/^[a-zA-Z\s]+$/.test(name))
      return "Name should only contain letters and spaces";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return "Please enter a valid email address (e.g., user@example.com)";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Phone number is required";
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 11) {
      return "Phone number must be exactly 11 digits";
    }

    if (!/^[0-9]{11}$/.test(cleanPhone)) {
      return "Phone number should contain only digits";
    }

    return "";
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Show toast
  const showToast = (message: string, type: "success" | "error"): void => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // Handle form submission
  const handleSubmit = async (): Promise<void> => {
    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    const newErrors: FormErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
    };

    setErrors(newErrors);

    // If there are errors, show error toast and return
    if (nameError || emailError || phoneError) {
      showToast("Please fix the errors above and try again!", "error");
      return;
    }

    // Start submission
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise<void>((resolve) => setTimeout(resolve, 2000));

      // Success
      showToast(
        `Awesome ${formData.name}! We'll send your high-converting landing page details to ${formData.email} shortly!`,
        "success"
      );

      // Reset form
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      showToast("Oops! Something went wrong. Please try again!", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      <section className="relative w-full py-12 sm:py-16 lg:py-20">
        {/* Container */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Trust Badge */}
            <motion.div
              className="flex justify-center mb-[33px] sm:mb-[85px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border-t border-primary">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-general-sans-12 text-secondary-light whitespace-nowrap">
                  Trusted by 30+ startups & entrepreneurs worldwide
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-manrope-bold-72 text-light">
                Strategic Landing Pages That
                <br />
                Convert From Just <span className="text-primary">$200</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                className="text-light max-w-[900px] mx-auto px-4"
                style={{
                  fontFamily: "var(--font-general-sans)",
                  fontSize: "clamp(12px, 2vw, 16px)",
                  lineHeight: "clamp(18px, 3vw, 24px)",
                }}
              >
                Stop wasting traffic on generic pages. We deliver premium,
                conversion-focused landing pages designed, developed, and
                launched in just 5 days.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FormContainer className="p-3 sm:p-9 w-full max-w-3xl">
                <div className="space-y-3">
                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="relative">
                      <CustomInput
                        type="text"
                        placeholder="Your name"
                        icon={User}
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute -bottom-5 left-0 text-xs text-red-400"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative sm:col-span-2 lg:col-span-1">
                      <CustomInput
                        type="email"
                        placeholder="Email Address"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute -bottom-5 left-0 text-xs text-red-400"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative lg:col-span-1">
                      <CustomInput
                        type="tel"
                        placeholder="Phone Number (11 digits)"
                        icon={Phone}
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className={
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }
                      />
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute -bottom-5 left-0 text-xs text-red-400"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CustomButton
                        variant="primary"
                        size="lg"
                        icon={ArrowRight}
                        iconPosition="right"
                        className={`w-full text-sm sm:text-base transition-all duration-300 ${
                          isSubmitting
                            ? "cursor-not-allowed opacity-70"
                            : "cursor-pointer hover:shadow-lg hover:shadow-primary/25"
                        }`}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span className="hidden sm:inline">
                              Creating your landing page...
                            </span>
                            <span className="sm:hidden">Processing...</span>
                          </span>
                        ) : (
                          <>
                            <span className="hidden sm:inline">
                              Get my high-converting landing page
                            </span>
                            <span className="sm:hidden">
                              Get my landing page
                            </span>
                          </>
                        )}
                      </CustomButton>
                    </motion.div>
                  </div>
                </div>
              </FormContainer>
            </motion.div>

            {/* Trust Indicators */}
            <TrustIndicators />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
