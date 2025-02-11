import { cn } from "@/lib/utils";
import { School2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  iconColor?: string; // Color for the icon
  iconBgColor?: string; // Background color for the icon container
  logoTextColor?: string; // Color for the main logo text
  coloredTextColor?: string; // Color for the colored part of the text (e.g., "Tool")
  iconSize?: number; // Size of the icon
}

export default function Logo({
  className,
  iconColor = "text-white", // Default icon color
  iconBgColor = "bg-blue-500 dark:bg-gray-800", // Default icon background color
  logoTextColor = "text-gray-900 dark:text-white", // Default logo text color
  coloredTextColor = "text-blue-500", // Default colored text color
  iconSize = 24, // Default icon size
}: LogoProps) {
  return (
    <div className="ml-2">
      <Link href="/" className="flex items-center space-x-2">
        <div className={cn("rounded-sm px-2 py-1", iconBgColor)}>
          <span className={iconColor}>
            <School2Icon size={iconSize} />
          </span>
        </div>
        <span className={cn("font-bold text-lg", logoTextColor)}>
          School-<span className={cn(coloredTextColor, className)}>Tool</span>
        </span>
      </Link>
    </div>
  );
}
