"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CountryFlag from "react-country-flag";
import { countries } from "country-data";
import { CircleHelp, ChevronDown, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TextInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  unit?: string;
  placeholder?: string;
  icon?: any;
  selectedCountry: { name: string; code: string; dialCode: string };
  onCountryChange: (country: {
    name: string;
    code: string;
    dialCode: string;
  }) => void;
};

// Custom debounce function
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Format and filter countries
const formattedCountries = countries.all
  .filter(
    (country) =>
      country.countryCallingCodes && country.countryCallingCodes.length > 0
  )
  .map((country) => ({
    name: country.name,
    code: country.alpha2,
    dialCode: country.countryCallingCodes[0],
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function PhoneInput({
  register,
  errors,
  label,
  type = "tel",
  name,
  toolTipText,
  unit,
  icon,
  placeholder,
  selectedCountry,
  onCountryChange,
}: TextInputProps) {
  const Icon = icon;
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter countries based on search term
  const filteredCountries = formattedCountries.filter(
    (country) =>
      country.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      country.dialCode.includes(debouncedSearchTerm) ||
      country.code.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-500 tracking-tight"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">
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
      <div className="mt-2">
        <div className="flex rounded-md">
          {/* Country selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center justify-between gap-1 px-3 h-10 bg-gray-50 border border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center gap-2">
                <CountryFlag
                  countryCode={selectedCountry.code}
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                  }}
                  svg
                />
                <span className="text-sm">{selectedCountry.dialCode}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 z-50 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-72 overflow-hidden"
                >
                  <div className="sticky top-0 bg-white p-2 border-b">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        className="w-full py-2 pl-8 pr-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Search country or code..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      {searchTerm && (
                        <button
                          type="button"
                          onClick={() => setSearchTerm("")}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                          <X className="h-4 w-4 text-gray-400" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="overflow-auto max-h-60">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <motion.button
                          key={country.code}
                          type="button"
                          className={cn(
                            "flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                            selectedCountry.code === country.code &&
                              "bg-indigo-50"
                          )}
                          onClick={() => {
                            onCountryChange(country);
                            setIsOpen(false);
                            setSearchTerm("");
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <CountryFlag
                            countryCode={country.code}
                            style={{
                              width: "1.2em",
                              height: "1.2em",
                              marginRight: "8px",
                            }}
                            svg
                          />
                          <span className="flex-1 text-left">
                            {country.name}
                          </span>
                          <span className="text-gray-500">
                            {country.dialCode}
                          </span>
                        </motion.button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        No countries found
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Phone number input */}
          <div className="relative flex-1">
            {icon && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon className="text-slate-300 w-4 h-4" />
              </div>
            )}
            <input
              id={name}
              type={type}
              {...register(`${name}`, { required: true })}
              className={cn(
                "block w-full h-10 rounded-r-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm",
                (errors[`${name}`] && "focus:ring-red-500") || (icon && "pl-8")
              )}
              placeholder={placeholder || "Phone number"}
            />
            {unit && (
              <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
                {unit}
              </p>
            )}
          </div>
        </div>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
