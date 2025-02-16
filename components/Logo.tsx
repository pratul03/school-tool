import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MdSchool } from "react-icons/md";
import Link from "next/link";
import React from "react";

// Define the variants for the logo
const logoVariants = cva("flex items-center space-x-2", {
  variants: {
    variant: {
      default: "text-gray-900 dark:text-white",
      primary: "text-blue-500 dark:text-blue-300",
      secondary: "text-blue-500 dark:text-gray-300",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

// Define the variants for the icon container
const iconContainerVariants = cva("rounded-full p-2", {
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
      default: "text-gray-900 dark:text-white",
      primary: "text-blue-500 dark:text-blue-300",
      secondary: "text-gray-100 dark:text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
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
}

// Logo Component
export default function Logo({
  className,
  variant,
  size,
  iconSize = 24,
  coloredText = "Tool",
  coloredTextColor = "text-blue-500",
  ...props
}: LogoProps) {
  return (
    <div className={cn("ml-2", className)} {...props}>
      <Link href="/" className={cn(logoVariants({ variant, size }))}>
        <div className={cn(iconContainerVariants({ variant }))}>
          <span className={cn(iconVariants({ variant }))}>
            <MdSchool size={iconSize} />
          </span>
        </div>
        <span className={cn(textVariants({ variant, size }))}>
          School-<span className={coloredTextColor}>{coloredText}</span>
        </span>
      </Link>
    </div>
  );
}
