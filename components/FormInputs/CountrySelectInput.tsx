"use client";

import React, { useState, useEffect, useRef } from "react";
import { countries } from "country-data";
import CountryFlag from "react-country-flag";
import { cn } from "@/lib/utils";
import { Search, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

type CountrySelectorProps = {
  onChange: (country: { name: string; code: string; dialCode: string }) => void;
  selectedCountry: { name: string; code: string; dialCode: string };
  label?: string;
};

export default function CountrySelectInput({
  onChange,
  selectedCountry,
  label,
}: CountrySelectorProps) {
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
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-500 tracking-tight mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        className="flex items-center justify-between w-full gap-2 px-3 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <CountryFlag
            countryCode={selectedCountry.code}
            style={{
              width: "1.2em",
              height: "1.2em",
            }}
            svg
          />
          <span className="text-sm font-medium truncate">
            {selectedCountry.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-72 overflow-hidden"
          >
            <div className="sticky top-0 bg-white p-2 border-b">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  className="w-full py-2 pl-8 pr-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Search country..."
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
                      selectedCountry.code === country.code && "bg-indigo-50"
                    )}
                    onClick={() => {
                      onChange(country);
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
                    <span className="flex-1 text-left truncate">
                      {country.name}
                    </span>
                    <span className="text-gray-500">{country.dialCode}</span>
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
  );
}
