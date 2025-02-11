import { School2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="ml-2">
      <Link href="/" className="flex items-center space-x-2">
        <div className="rounded-sm px-2 py-1 bg-blue-500 dark:bg-gray-800">
          <span className="text-white">
            <School2Icon size={24} />
          </span>
        </div>
        <span className="font-bold text-lg text-gray-900 dark:text-white">
          School-<span className="text-blue-500">Tool</span>
        </span>
      </Link>
    </div>
  );
}
