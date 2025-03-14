import StudentAdmissionTabs from "@/components/dashboard/forms/students/student-admission-tabs";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-10 md:-mt-6">
      <div className="w-full max-w-6xl">
        <h1 className=" text-xl md:text-3xl font-bold text-center mb-2">
          Student Admission Portal
        </h1>
        <StudentAdmissionTabs />
      </div>
    </main>
  );
}
