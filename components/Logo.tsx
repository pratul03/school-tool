import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Snowflake } from "lucide-react";

// Define the variants for the logo container
const logoVariants = cva("flex items-center space-x-2", {
  variants: {
    variant: {
      default: "text-gray-900 dark:text-white",
      primary: "text-blue-500 dark:text-blue-300",
      secondary: "text-blue-500 dark:text-gray-300",
    },
    size: {
      xs: "text-xs", // Extra Small
      sm: "text-sm", // Small
      md: "text-base", // Medium
      lg: "text-lg", // Large
      xl: "text-xl", // Extra Large
      "2xl": "text-2xl", // 2X Large
      "3xl": "text-3xl", // 3X Large
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

// Define the variants for the icon container
const iconContainerVariants = cva("rounded-md p-2", {
  variants: {
    variant: {
      default: "bg-blue-500 dark:bg-gray-800",
      primary: "bg-blue-500 dark:bg-blue-800",
      secondary: "bg-blue-500 dark:bg-gray-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Define the variants for the icon
const iconVariants = cva("", {
  variants: {
    variant: {
      default: "text-white",
      primary: "text-white",
      secondary: "text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Define the variants for the text
const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-900 dark:text-white leading-5",
      primary: "text-blue-500 dark:text-blue-300 leading-5",
      secondary: "text-gray-100 dark:text-white leading-5",
    },
    size: {
      xs: "text-xs", // Extra Small
      sm: "text-sm", // Small
      md: "text-base", // Medium
      lg: "text-lg", // Large
      xl: "text-xl", // Extra Large
      "2xl": "text-2xl", // 2X Large
      "3xl": "text-3xl", // 3X Large
    },
    weight: {
      light: "font-light", // Light
      normal: "font-normal", // Normal
      medium: "font-medium", // Medium
      semibold: "font-semibold", // Semibold
      bold: "font-bold", // Bold
      extrabold: "font-extrabold", // Extrabold
    },
    lineHeight: {
      none: "leading-none", // No extra line height
      tight: "leading-tight", // Tight line height
      snug: "leading-snug", // Slightly tighter line height
      normal: "leading-normal", // Normal line height
      relaxed: "leading-relaxed", // Slightly larger line height
      loose: "leading-loose", // Larger line height
      customLeading: "leading-10",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
    weight: "normal",
    lineHeight: "normal", // Default line height
  },
});

// Define the props for the Logo component
export interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants>,
    VariantProps<typeof iconContainerVariants>,
    VariantProps<typeof iconVariants>,
    VariantProps<typeof textVariants> {
  iconSize?: number;
  coloredText?: string;
  coloredTextColor?: string;
  collapsed?: boolean;
  lineHeight?:
    | "none"
    | "tight"
    | "snug"
    | "normal"
    | "relaxed"
    | "loose"
    | "customLeading";
}

// Logo Component
export default function Logo({
  className,
  variant,
  size,
  iconSize = 24,
  coloredText = "Tool",
  coloredTextColor = "text-blue-500",
  collapsed = false,
  weight, // Font weight prop
  lineHeight,
  ...props
}: LogoProps) {
  return (
    <div className={cn("ml-2", className)} {...props}>
      <Link href="/" className={cn(logoVariants({ variant, size }))}>
        <div className={cn(iconContainerVariants({ variant }))}>
          <span className={cn(iconVariants({ variant }))}>
            <Snowflake
              size={collapsed ? iconSize / 1.5 : iconSize}
              strokeWidth={1.5}
            />
          </span>
        </div>
        {!collapsed && (
          <span
            className={cn(textVariants({ variant, size, weight, lineHeight }))}
          >
            School <span className={coloredTextColor}>{coloredText}</span>
          </span>
        )}
      </Link>
    </div>
  );
}
