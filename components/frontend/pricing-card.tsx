"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SmallTitle from "./small-title";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { ShinyButton } from "../magicui/shiny-button";

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = 49;
  const annualPrice = 441;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SmallTitle title="✨Pricing" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Smart School Management Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Manage your school effortlessly with powerful tools for student
            enrollment, attendance, timetable scheduling, and more.
          </p>
        </div>
        <div className="mx-auto mt-8 flex justify-center space-x-4">
          <Button
            variant={isAnnual ? "outline" : "default"}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Annually (Save 25%)
          </Button>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {isAnnual ? "Annual" : "Monthly"} Subscription
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Unlock the full potential of your school with AI-powered
              analytics, real-time tracking, and an easy-to-use interface.
            </p>

            <div className="mt-10 flex items-center gap-x-4">
              <SmallTitle title="Features included ✨" />
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {[
                "Student Enrollment & Management",
                "Automated Attendance Tracking",
                "Timetable & Scheduling",
                "AI-Powered Report Generation",
                "Cloud-Based Secure Data Storage",
                "Multi-User Role Access",
                "Parent & Teacher Communication Portal",
                "Mobile & Web Access",
              ].map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg
                    className="h-6 w-8 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <motion.div
              key={isAnnual ? "annual" : "monthly"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
            >
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual
                    ? "Save more with an annual plan!"
                    : "Flexible monthly plan"}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <motion.span
                    key={isAnnual ? "annual-price" : "monthly-price"}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="text-5xl font-bold tracking-tight text-gray-900"
                  >
                    ${isAnnual ? annualPrice : monthlyPrice}
                  </motion.span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                  {!isAnnual && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <InteractiveHoverButton className="mt-[110px]">
                  Get Started
                </InteractiveHoverButton>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices available for institutions & easy school-wide
                  implementation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
