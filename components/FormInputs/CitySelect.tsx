"use client";

import React, { useState, useMemo, useCallback } from "react";
import { City } from "country-state-city";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDebounce } from "@/hooks/use-debounce"; // Custom debounce hook

type CitySelectProps = {
  selectedCountryCode: string;
  selectedState: string; // State ISO code
  onCityChange: (city: string) => void;
  label?: string;
};

export default function CitySelect({
  selectedCountryCode,
  selectedState,
  onCityChange,
  label,
}: CitySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoize the list of cities for the selected state
  const cities = useMemo(() => {
    return City.getCitiesOfState(selectedCountryCode, selectedState);
  }, [selectedCountryCode, selectedState]);

  // Filter cities based on debounced search term
  const filteredCities = useMemo(() => {
    return cities.filter((city) =>
      city.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [cities, debouncedSearchTerm]);

  // Handle city selection
  const handleCitySelect = useCallback(
    (city: string) => {
      setSelectedCity(city);
      onCityChange(city);
      setIsOpen(false);
      setSearchTerm("");
    },
    [onCityChange]
  );

  return (
    <div className="relative w-full">
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
          <span className="text-sm font-medium truncate">
            {selectedCity || "Select City"}
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
              <input
                type="text"
                className="w-full py-2 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Search city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="overflow-auto max-h-60">
              {filteredCities.length > 0 ? (
                filteredCities.map((city) => (
                  <motion.button
                    key={city.name}
                    type="button"
                    className={cn(
                      "flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                      selectedCity === city.name && "bg-indigo-50"
                    )}
                    onClick={() => handleCitySelect(city.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex-1 text-left truncate">
                      {city.name}
                    </span>
                  </motion.button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500">
                  No cities found for this state.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
