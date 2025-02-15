"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookOpen,
  Bus,
  BarChart2,
  DollarSign,
  ClipboardList,
  Bell,
  MessageSquare,
  Users,
  GraduationCap,
  CalendarDays,
  FileText,
  Shield,
  EllipsisVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { ModeToggle } from "./frontend/mode-toggle";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
    href: "/features/student-management",
  },
  {
    icon: GraduationCap,
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
    href: "/features/academic-management",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description:
      "Integrated messaging system with multi-channel notifications for seamless school-wide communication",
    href: "/features/communication",
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
    href: "/features/finance",
  },
  {
    icon: ClipboardList,
    title: "Staff Management",
    description:
      "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
    href: "/features/staff-management",
  },
  {
    icon: Bus,
    title: "Transport Management",
    description:
      "Real-time transport tracking, route management, and automated notifications for safe student transportation",
    href: "/features/transport",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reports",
    description:
      "Powerful analytics tools for data-driven decisions with customizable reporting and insights",
    href: "/features/analytics",
  },
  {
    icon: BookOpen,
    title: "Resource Management",
    description:
      "Digital library system, inventory tracking, and facility scheduling in one integrated platform",
    href: "/features/resources",
  },
  {
    icon: CalendarDays,
    title: "Attendance System",
    description:
      "Automated attendance tracking for students and staff with instant notification capabilities",
    href: "/features/attendance",
  },
  {
    icon: FileText,
    title: "Examination Portal",
    description:
      "Complete examination management system from scheduling to result publication with secure access",
    href: "/features/examinations",
  },
  {
    icon: Bell,
    title: "Notice Board",
    description:
      "Digital notice board for announcements, events, and important updates with targeted distribution",
    href: "/features/announcements",
  },
  {
    icon: Shield,
    title: "Security & Access",
    description:
      "Role-based access control with data encryption and secure backups for complete peace of mind",
    href: "/features/security",
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <Logo />

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-[#7c7c7c] transition-colors hover:bg-accent hover:text-blue-500 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-rethink">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base bg-transparent font-semibold text-[#7c7c7c] hover:text-blue-500">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <p className="text-lg font-semibold text-[#7c7c7c]">
                        Features
                      </p>
                      <Link
                        href="/features"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          href={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                              <feature.icon className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                {feature.title}
                              </h5>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium mb-1">Get started</h4>
                          <p className="text-sm text-muted-foreground">
                            Their food sources have decreased, and their numbers
                          </p>
                        </div>
                        <Link href="/contact-us">
                          <Button variant="secondary">Get started</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-[#7c7c7c] transition-colors hover:bg-accent hover:text-blue-500 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/academy" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-[#7c7c7c] transition-colors hover:bg-accent hover:text-blue-500 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Academy
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button
              variant="ghost"
              size="lg"
              className="text-base font-semibold text-[#7c7c7c] tracking-tight"
            >
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button
              size="lg"
              className="text-base font-semibold tracking-tight"
            >
              Sign up
            </Button>
          </Link>
          <ModeToggle />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost">
              <EllipsisVertical className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full p-0 flex flex-col max-h-[100vh]"
          >
            {/* Fixed Header */}
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left font-bold tracking-tight text-xl text-black/70">
                Navigation
              </SheetTitle>
            </SheetHeader>

            {/* Scrollable Content */}
            <div
              className="flex flex-1 flex-col overflow-y-auto py-4 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-purple-100
  [&::-webkit-scrollbar-thumb]:bg-indigo-200
  [&::-webkit-scrollbar-thumb]:rounded-md
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
              <Link
                href="/"
                className="px-4 py-2 text-lg font-medium hover:bg-accent text-[#7c7c7c] hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <button
                className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left text-[#7c7c7c] hover:text-blue-500"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Features
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    showFeatures && "rotate-180"
                  )}
                />
              </button>
              {showFeatures && (
                <div className="px-4 py-2 space-y-2">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-4 py-2"
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 bg-muted rounded-md">
                        <feature.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/#pricing"
                className="px-4 py-2 text-lg font-medium hover:bg-accent text-[#7c7c7c] hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/academy"
                className="px-4 py-2 text-lg font-medium hover:bg-accent text-[#7c7c7c] hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Academy
              </Link>
            </div>

            {/* Fixed Footer */}
            <div className="border-t bg-background p-4">
              <div className="grid gap-4">
                <Button
                  variant="outline"
                  className="w-full text-lg font-semibold tracking-tight text-black/80"
                  onClick={() => setOpen(false)}
                  size="lg"
                >
                  Log in
                </Button>
                <Button
                  className="w-full text-lg font-semibold tracking-tight"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
