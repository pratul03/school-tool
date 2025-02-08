import { School2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-md px-2 py-1">
          <span className="text-white font-bold text-xl">
            <School2Icon size={24} />
          </span>
        </div>
        <span className="font-bold text-xl">
          School-<span className="text-blue-500">Tool</span>
        </span>
      </Link>
    </div>
  );
}
