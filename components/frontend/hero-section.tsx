"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import SmallTitle from "./small-title";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SmallTitle title="✨Welcome to School-Tool" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Manage your Educational Institute
          </h1>
          <p className="mt-6 text-lg font-semibold leading-8 text-muted-foreground">
            With the Help of our ONE STOP SOLUTION
            <Link href="/" className="text-blue-500 font-bold">
              {" "}
              School-Tool{" "}
            </Link>{" "}
            From admissions to academics, simplify every aspect of school
            administration with our comprehensive and user-friendly platform.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center gap-x-6">
            <Link href="/features">
              <Button
                size="lg"
                className=" text-lg font-medium bg-blue-500 rounded-xl hover:bg-blue-700"
              >
                All Features
                <ArrowRightIcon />
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-medium rounded-xl"
              >
                Learn More
                <ArrowRightIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
