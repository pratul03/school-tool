import React from "react";
import { Badge } from "../ui/badge";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <Badge
      className="text-sm inline-flex bg-gradient-to-br from-purple-200 to-indigo-200 border border-[#222]/05 px-3 py-1 rounded-lg mb-8 font-semibold hover:cursor-pointer"
      variant="secondary"
    >
      {title}
    </Badge>
  );
}
