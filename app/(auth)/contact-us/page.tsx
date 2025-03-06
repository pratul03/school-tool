import ContactUs from "@/components/frontend/contact-form";
import Footer from "@/components/frontend/Footer";
import Logo from "@/components/Logo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | School Management System",
  description: "Get in touch with our school administration team",
};

export default function ContactUsPage() {
  return (
    <div className="py-12">
      <div className="flex flex-col justify-center items-center mb-16 mx-5 md:mx-0">
        <Logo
          size="2xl"
          weight="bold"
          className="mb-4"
          iconSize={28}
          lineHeight="loose"
        />
        <h1 className="max-w-[700px] text-center md:text-4xl font-bold tracking-tight text-3xl mb-4">
          Get your School Management System
        </h1>
        <p className="text-lg font-medium text-gray-500 max-w-[900px] text-center tracking-normal">
          Streamline your entire school operations with our comprehensive suite
          of integrated modules designed specifically for modern educational
          Institutes
        </p>
      </div>
      <ContactUs />
      <div className="mt-10 -mb-16">
        <Footer />
      </div>
    </div>
  );
}
