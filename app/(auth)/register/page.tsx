"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Logo from "@/components/Logo";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required").trim().toLowerCase(),
  email: z.string().email("Invalid email address").trim(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),
});

type FormData = z.infer<typeof formSchema>;

const SignupPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/img1.png", "/img2.jpg", "/img3.jpg"];

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="container flex flex-col bg-gray-50">
      <div className="flex h-screen">
        {/* Carousel and Logo Section */}
        <div className="w-1/2 ml-[150px] items-center justify-center ">
          {/* Logo Section */}
          <div className="mt-5 mb-5">
            <Logo className="mx-auto"/>
          </div>
          {/* Carousel Section */}
          <div className="h-[80%] w-[90%] relative overflow-hidden rounded-lg">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="min-w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 flex items-center justify-center p-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      type="text"
                      placeholder="John Doe"
                      className="transition-all duration-200 hover:border-gray-400 focus:ring-2"
                    />
                    {errors.name && typeof errors.name.message === "string" && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-red-500"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>
                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Select
                      onValueChange={(value: "male" | "female" | "other") =>
                        setValue("gender", value)
                      }
                      defaultValue="male"
                    >
                      <SelectTrigger className="h-12 border-black/10 bg-gray-100 text-black/60 dark:text-white dark:bg-gray-800 text-base font-medium cursor-pointer">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent className="text-base text-black/80 font-medium">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender &&
                      typeof errors.gender.message === "string" && (
                        <p className="text-sm text-red-500">
                          {errors.gender.message}
                        </p>
                      )}
                  </motion.div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="transition-all duration-200 hover:border-gray-400 focus:ring-2"
                    />
                    {errors.email &&
                      typeof errors.email.message === "string" && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-red-500"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      {...register("password")}
                      type="password"
                      className="transition-all duration-200 hover:border-gray-400 focus:ring-2"
                    />
                    {errors.password &&
                      typeof errors.password.message === "string" && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-red-500"
                        >
                          {errors.password.message}
                        </motion.p>
                      )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      variant="ghost"
                      className="w-full text-base font-medium text-black transition-all duration-200 hover:bg-gray-100"
                    >
                      Sign Up
                    </Button>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-normal">
                      Already have an account?
                    </span>
                    <Link
                      href="/login"
                      className="text-sm font-normal underline mr-2"
                    >
                      {" "}
                      click here
                    </Link>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
