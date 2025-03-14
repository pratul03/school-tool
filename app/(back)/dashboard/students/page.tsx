import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function StudentDashboard() {
  return (
    <div className="flex space-x-6">
      Student
      <Button asChild>
        <Link href="/dashboard/students/new">New Student</Link>
      </Button>
    </div>
  );
}
