// "use client";

// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Github } from "lucide-react";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Logo from "@/components/Logo";
// import { ReactNode } from "react";

// // Define Zod schema
// const signUpSchema = z.object({
//   firstName: z.string().trim().min(1, "First name is required"),
//   lastName: z.string().trim().min(1, "Last name is required"),
//   gender: z.enum(["male", "female", "other"], {
//     message: "Gender is required",
//   }),
//   email: z
//     .string()
//     .trim()
//     .min(1, "Email is required")
//     .email("Invalid email address"),
//   password: z.string().trim().min(8, "Password must be at least 8 characters"),
// });

// export default function SignUpPage() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(signUpSchema),
//   });

//   const onSubmit = (data: any) => {
//     console.log("Form submitted:", data);
//   };

//   return (
//     <motion.div
//       className="flex max-h-screen bg-gray-50 dark:bg-black"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Left Section */}
//       <motion.div
//         className="relative hidden w-1/2 p-8 lg:block"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-purple-300 to-blue-300">
//           <div className="flex h-full flex-col items-center justify-center px-8 text-center text-white">
//             <div className="mb-8">
//               <Logo iconSize={28} />
//             </div>
//             <h2 className="mb-6 text-4xl font-bold text-white">
//               Get Started with Us
//             </h2>
//             <p className="mb-12 text-lg">
//               Complete these easy steps to register your account.
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Right Section */}
//       <motion.div
//         className="flex w-full items-center justify-center bg-white dark:bg-black p-6 lg:w-1/2"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.div className="w-full max-w-md rounded-[40px] p-12">
//           <div className="mx-auto max-w-sm">
//             <h2 className="mb-2 text-3xl font-bold text-black dark:text-white">
//               Sign Up Account
//             </h2>
//             <p className="mb-8 text-gray-500 dark:text-gray-400">
//               Enter your personal data to create your account.
//             </p>

//             <div className="mb-8 grid gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="h-12 border border-gray-300 rounded-lg flex items-center justify-center dark:border-gray-700"
//               >
//                 <Github className="mr-2 h-5 w-5" />
//                 Sign up with Github
//               </motion.button>
//             </div>

//             <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//               {/* First Name */}
//               <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
//                 <Input
//                   {...register("firstName")}
//                   className="h-12 border-black/10 bg-gray-100 text-black placeholder:text-gray-300 dark:text-white dark:bg-gray-800"
//                   placeholder="First Name"
//                 />
//                 {errors.firstName && (
//                   <p className="text-sm text-red-500">
//                     {errors.firstName.message as ReactNode}
//                   </p>
//                 )}
//               </motion.div>

//               {/* Last Name */}
//               <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
//                 <Input
//                   {...register("lastName")}
//                   className="h-12 border-black/10 bg-gray-100 text-black placeholder:text-gray-300 dark:text-white dark:bg-gray-800"
//                   placeholder="Last Name"
//                 />
//                 {errors.lastName &&
//                   typeof errors.lastName.message === "string" && (
//                     <p className="text-sm text-red-500">
//                       {errors.lastName.message}
//                     </p>
//                   )}
//               </motion.div>

//               {/* Gender */}
//               <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
//                 <Select
//                   onValueChange={(value) => setValue("gender", value)}
//                   defaultValue=""
//                 >
//                   <SelectTrigger className="h-12 border-black/10 bg-gray-100 text-black/60 dark:text-white dark:bg-gray-800 text-base font-medium cursor-pointer">
//                     <SelectValue placeholder="Select Gender" />
//                   </SelectTrigger>
//                   <SelectContent className="text-base text-black/80 font-medium">
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 {errors.gender && typeof errors.gender.message === "string" && (
//                   <p className="text-sm text-red-500">
//                     {errors.gender.message}
//                   </p>
//                 )}
//               </motion.div>

//               {/* Email */}
//               <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
//                 <Input
//                   {...register("email")}
//                   className="h-12 border-black/10 bg-gray-100 text-black placeholder:text-gray-300 dark:text-white dark:bg-gray-800"
//                   placeholder="Email"
//                   type="email"
//                 />
//                 {errors.email && typeof errors.email.message === "string" && (
//                   <p className="text-sm text-red-500">{errors.email.message}</p>
//                 )}
//               </motion.div>

//               {/* Password */}
//               <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
//                 <Input
//                   {...register("password")}
//                   className="h-12 border-black/10 bg-gray-100 text-black placeholder:text-gray-300 dark:text-white dark:bg-gray-800"
//                   placeholder="Password"
//                   type="password"
//                 />
//                 {errors.password &&
//                   typeof errors.password.message === "string" && (
//                     <p className="text-sm text-red-500">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 <p className="text-sm text-gray-400 dark:text-gray-500">
//                   Must be at least 8 characters.
//                 </p>
//               </motion.div>

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 className="h-12 w-full bg-white text-black hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Sign Up
//               </motion.button>
//               {/**login link */}
//               <motion.div>

//               </motion.div>
//             </form>
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
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
    <div className="flex h-screen bg-gray-100">
      {/* Carousel and Logo Section */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        {/* Logo Section */}

        <Logo />

        {/* Carousel Section */}
        <div className="h-4/5 w-4/5 relative overflow-hidden ml-10">
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
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
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
                  {errors.email && typeof errors.email.message === "string" && (
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
  );
};

export default SignupPage;
