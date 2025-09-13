import React from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
}

export const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", icon: Icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="relative flex items-center">
          {Icon && (
            <Icon className="absolute left-[18px] w-4 h-4 text-primary z-10 flex-shrink-0" />
          )}
          <input
            ref={ref}
            className={`
              w-full
              ${Icon ? "pl-[42px]" : "pl-[18px]"}
              pr-[18px] py-[18px]
              rounded
              border-2 border-stroke
              bg-transparent
              text-secondary-light
              placeholder-secondary-light
              focus:border-primary
              focus:outline-none
              transition-colors
              text-general-sans-12
              ${error ? "border-red-500 focus:border-red-500" : ""}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <span className="text-red-400 text-xs mt-1 block">{error}</span>
        )}
      </div>
    );
  }
);
