"use client";

// use client

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import avatar from "@/app/assets/avatar-1.png";
import avatar2 from "@/app/assets/avatar-2.png";
import avatar3 from "@/app/assets/avatar-3.png";
import avatar4 from "@/app/assets/avatar-5.png";
import img1 from "@/app/assets/16-courses-in-school-administration-and-management.png";
import img2 from "@/app/assets/school-image-1.png";
import img3 from "@/app/assets/managment-software.png";
import img4 from "@/app/assets/school-management-software.png";
import { useState, useEffect } from "react";
import { ShinyHeader } from "./shiny-header";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string | StaticImageData;
  avatar: string | StaticImageData;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "This is bento grid in vercel blog",
    author: "Michael Jordan",
    date: "12.10.1999",
    image: img1,
    avatar,
    link: "/",
  },
  {
    id: 2,
    title: "Exploring the Future of Web Development",
    author: "Jane Doe",
    date: "05.07.2023",
    image: img2,
    avatar: avatar2,
    link: "/",
  },
  {
    id: 3,
    title: "How to Build Scalable Applications",
    author: "John Smith",
    date: "18.03.2021",
    image: img3,
    avatar: avatar3,
    link: "/",
  },
  {
    id: 4,
    title: "Mastering React with Next.js",
    author: "Alice Johnson",
    date: "24.12.2022",
    image: img4,
    avatar: avatar2,
    link: "/",
  },
  {
    id: 5,
    title: "Understanding TypeScript in 2024",
    author: "Robert Brown",
    date: "02.11.2024",
    image: img1,
    avatar: avatar4,
    link: "/",
  },
];

export default function SolidBento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-[600px] items-center justify-center bg-gradient-to-br  from-indigo-100 to-purple-100 dark:from-purple-950 dark:to-indigo-950 flex-col">
      <ShinyHeader text="Introducing SchoolTool" />
      <div className="max-w-6xl mx-auto mb-10 -mt-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Manage your Educational Institute
        </h1>
      </div>
      <div className="grid max-h-screen h-auto p-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 max-w-[1200px] ">
        {blogs.map((blog, index) => (
          <Link
            key={blog.id}
            href={blog.link}
            className={`group relative flex overflow-hidden rounded-2xl  transition-all shadow-md shadow-indigo-200 duration-300 hover:scale-[1.02] ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 1
                ? "md:col-span-1 md:row-span-1"
                : "md:col-span-1 md:row-span-1 lg:row-span-2"
            }`}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-50 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative flex h-full w-full flex-col justify-end p-6 text-white">
              <h2 className="mb-2 text-2xl font-bold leading-tight">
                {blog.title}
              </h2>
              <div className="flex items-center space-x-2">
                <Image
                  src={blog.avatar}
                  alt={blog.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">{blog.author}</span>
                <span className="text-xs text-gray-300">{blog.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
