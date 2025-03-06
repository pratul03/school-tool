"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Controller } from "react-hook-form";

type RoleSelectProps = {
  control: any;
  errors: any;
  label: string;
  name: string;
  toolTipText?: string;
  placeholder?: string;
};

const roleOptions = [
  { value: "Principal", label: "Principal" },
  { value: "Vice_Principal", label: "Vice Principal" },
  { value: "Head_of_Department", label: "Head of Department" },
  { value: "Teacher", label: "Teacher" },
  { value: "Class_Teacher", label: "Class Teacher" },
  { value: "Librarian", label: "Librarian" },
  { value: "Counselor", label: "Counselor" },
  { value: "Accountant", label: "Accountant" },
  { value: "Administrator", label: "Administrator" },
  { value: "Secretary", label: "Secretary" },
  { value: "Receptionist", label: "Receptionist" },
  { value: "IT_Support", label: "IT Support" },
  { value: "Lab_Assistant", label: "Lab Assistant" },
  { value: "Sports_Coach", label: "Sports Coach" },
  { value: "Other", label: "Other" },
];

export default function RoleSelect({
  control,
  errors,
  label,
  name,
  toolTipText,
  placeholder,
}: RoleSelectProps) {
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-600 tracking-tight"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <motion.div
        className="mt-2 mb-4" // Add margin-bottom
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Controller
          name={name}
          control={control}
          rules={{ required: `${label} is required` }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                className={cn(
                  "w-full rounded-md border-0 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm",
                  errors[name] && "focus:ring-red-500"
                )}
              >
                <SelectValue placeholder={placeholder || `Select ${label}`} />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom">
                {" "}
                {/* Force dropdown to open below */}
                {roleOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors[name] && (
          <motion.span
            className="text-xs text-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {errors[name].message}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
