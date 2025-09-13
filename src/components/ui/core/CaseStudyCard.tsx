"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface CaseStudyCardProps {
  image: string;
  websiteName: string;
  badges: string[];
}

const CaseStudyCard = ({ image, websiteName, badges }: CaseStudyCardProps) => {
  return (
    <div className="p-3 rounded-xl border-2 border-stroke bg-background">
      <div className="mb-2">
        <img
          src={image}
          alt={`${websiteName} case study`}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-4">
          {/* Website Name */}
          <h3 className="text-manrope-medium-16 text-light font-medium">
            {websiteName}
          </h3>

          {/* Badges */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground bg-foreground"
              >
                <Check className="w-4 h-4 text-primary" />
                <span className="text-general-sans-12 text-secondary-light whitespace-nowrap">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
