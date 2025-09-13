import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  className = "",
  maxWidth = "722px",
}) => {
  return (
    <div
      className={`w-full mx-auto p-4 sm:p-6 md:p-9 rounded-lg border border-stroke bg-background ${className}`}
      style={{
        maxWidth,
        boxShadow: "0 12px 32px 0 rgba(31, 255, 165, 0.10)",
      }}
    >
      {children}
    </div>
  );
};
