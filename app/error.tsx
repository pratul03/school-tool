"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, RefreshCcw, ServerOffIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center max-w-md">
        {/* Animated Server Off Icon */}
        <motion.div
          className="flex items-center justify-center mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-red-600 rounded-full p-6">
            <ServerOffIcon className="text-white h-20 w-20" />
          </div>
        </motion.div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Internal Server Error
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Oops! Something went wrong on our end. Please try again later.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white">
              <HomeIcon className="h-5 w-5" />
              Go Home
            </Button>
          </Link>

          <Button
            className="flex items-center gap-2 bg-stone-700 hover:bg-stone-900 text-white"
            onClick={() => window.location.reload()}
          >
            <RefreshCcw className="h-5 w-5" />
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  );
}
