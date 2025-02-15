"use client";

import type React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import {
  type LucideIcon,
  Book,
  BarChartIcon as ChartBar,
  GraduationCap,
  Wallet,
} from "lucide-react";
import img1 from "@/app/assets/16-courses-in-school-administration-and-management.png";
import img2 from "@/app/assets/school-image-1.png";
import img3 from "@/app/assets/managment-software.png";
import img4 from "@/app/assets/school-management-software.png";
import SmallTitle from "./small-title";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string | StaticImageData;
  detail: string[];
}

const featureCards: FeatureCard[] = [
  {
    id: "student",
    title: "Student",
    description:
      "Efficiently manage student records, attendance, and performance tracking.",
    icon: GraduationCap,
    image: img1,
    detail: [
      "Student enrollment and profile management",
      "Attendance tracking and reports",
      "Grade and performance monitoring",
      "Parent communication portal",
      "Behavior and disciplinary records",
    ],
  },
  {
    id: "academics",
    title: "Academic",
    description:
      "Plan and organize curriculum, schedules, and course materials with ease.",
    icon: Book,
    image: img2,
    detail: [
      "Course and syllabus management",
      "Class scheduling and timetable generation",
      "Assignment and homework tracking",
      "Lesson planning tools",
      "Exam scheduling and grading system",
    ],
  },
  {
    id: "finance",
    title: "Financial",
    description:
      "Streamline fee collection, budgeting, and financial reporting processes.",
    icon: Wallet,
    image: img3,
    detail: [
      "Student fee collection and tracking",
      "Scholarship and financial aid management",
      "Budget planning and expense tracking",
      "Invoice generation and payment processing",
      "Payroll and staff salary management",
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Gain insights with comprehensive analytics and customizable reports.",
    icon: ChartBar,
    image: img4,
    detail: [
      "Student performance analytics",
      "Attendance and discipline reports",
      "Financial summaries and audits",
      "Customizable dashboard with key metrics",
      "AI-driven predictive insights for decision-making",
    ],
  },
];

const AnimatedList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ol className="space-y-6">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center space-x-6"
        >
          <span className="flex items-center justify-center  w-8 h-8 bg-blue-100/60 text-blue-500 font-medium rounded-lg">
            {index + 1}
          </span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ol>
  );
};

export default function AdditionalFeatures() {
  return (
    <div className="w-full max-w-full max-h-[100vh] mt-[100px] mb-[400px] md:mb-[200px]">
      <div className="max-w-full mx-auto text-center">
        <SmallTitle title=" Features ✨" />
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Additional Features
        </h2>
        <p className="text-center text-gray-600 md:mb-8 mb-12 max-w-2xl mx-auto font-medium text-base md:text-lg">
          Discover the powerful features of our School Management System
          designed to streamline operations and enhance educational experiences.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto h-[80vh]">
        <CardContent className="p-6">
          <Tabs defaultValue={featureCards[0].id} className="w-full">
            <TabsList className="grid w-full  grid-cols-4  h-auto">
              {featureCards.map((card) => (
                <TabsTrigger
                  key={card.id}
                  value={card.id}
                  className="flex flex-col items-center justify-center p-2 space-y-2"
                >
                  <card.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{card.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6">
              <AnimatePresence mode="wait">
                {featureCards.map((card) => (
                  <TabsContent key={card.id} value={card.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                        <p className="text-muted-foreground">
                          {card.description}
                        </p>
                        <AnimatedList items={card.detail} />
                      </div>
                      <div className="relative h-[300px] md:h-[400px]">
                        <Image
                          src={card.image || "/placeholder.svg"}
                          alt={card.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
