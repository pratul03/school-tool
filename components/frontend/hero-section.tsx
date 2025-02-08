"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Manage your Educational Institute
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            With the Help of our ONE STOP SOLUTION from School-Tool with
            seamless experience & features that will help your Academy to move
            forward in Digital Era.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center gap-x-6">
            <Link href="/features">
              <Button size="xl" className="tracking-[1px] text-lg font-medium">
                Features
                <ArrowRightIcon />
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                size="xl"
                variant="outline"
                className="text-lg font-medium"
              >
                Contact Us
                <ArrowRightIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
