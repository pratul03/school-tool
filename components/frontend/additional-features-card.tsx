"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Book,
  BarChartIcon as ChartBar,
  GraduationCap,
  Wallet,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmallTitle from "./small-title";
import img1 from "@/app/assets/16-courses-in-school-administration-and-management.png";
import img2 from "@/app/assets/school-image-1.png";
import img3 from "@/app/assets/managment-software.png";
import img4 from "@/app/assets/school-management-software.png";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string | StaticImageData;
  detail: string[];
}

const featureCards: FeatureCard[] = [
  {
    id: "student",
    title: "Student Management",
    description:
      "Efficiently manage student records, attendance, and performance tracking.",
    icon: <GraduationCap className="h-6 w-6" />,
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
    title: "Academic Planning",
    description:
      "Plan and organize curriculum, schedules, and course materials with ease.",
    icon: <Book className="h-6 w-6" />,
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
    title: "Financial Management",
    description:
      "Streamline fee collection, budgeting, and financial reporting processes.",
    icon: <Wallet className="h-6 w-6" />,
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
    title: "Analytics and Reporting",
    description:
      "Gain insights with comprehensive analytics and customizable reports.",
    icon: <ChartBar className="h-6 w-6" />,
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

export default function AdditionalFeatures() {
  const [activeTab, setActiveTab] = useState(featureCards[0].id);

  return (
    <section className="py-12 px-4 bg-gray-50 sm:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <SmallTitle title="Additional Features ✨" />
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Additional Features
        </h2>
        <p className="text-center text-gray-600 md:mb-8 mb-12 max-w-2xl mx-auto font-medium text-base md:text-lg">
          Discover the powerful features of our School Management System
          designed to streamline operations and enhance educational experiences.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-16 md:mb-6">
            {featureCards.map((card) => (
              <TabsTrigger
                key={card.id}
                value={card.id}
                className="flex items-center justify-center gap-2 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                {card.icon}
                <span className="hidden sm:inline">{card.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {featureCards.map((card) => (
            <TabsContent key={card.id} value={card.id}>
              <Card className="w-full mx-auto h-auto">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-left">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base md:text-lg font-medium text-left">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row justify-between items-stretch gap-6 sm:gap-8">
                  <div className="flex-1 bg-white/60 py-6 px-4 sm:py-8 sm:px-12 rounded-lg shadow-md min-h-[350px] sm:min-h-[400px]">
                    <ul className="list-inside space-y-3 sm:space-y-4">
                      {card.detail.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-700 text-sm sm:text-base leading-relaxed flex gap-3 sm:gap-4"
                        >
                          <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-blue-100/60 text-blue-500 font-medium rounded-lg">
                            {index + 1}
                          </span>
                          <span className="text-black">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 flex justify-center items-center min-h-[350px] sm:min-h-[400px]">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={`${card.title} illustration`}
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-full max-h-[400px]"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
