"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Users } from "lucide-react";

export default function StudentAdmissionTabs() {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <div className="w-full bg-none rounded-lg overflow-hidden">
      <Tabs
        defaultValue="single"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <div className="px-6 pt-6">
          <TabsList className="relative grid w-full grid-cols-2 h-16 rounded-lg bg-muted-foreground/10 text-muted-foreground">
            <TabsTrigger
              value="single"
              className="relative z-10 text-base md:text-lg font-medium tracking-tight transition-colors data-[state=active]:text-black px-4 py-3 gap-2"
            >
              <UserPlus />
              Single Admission
              {activeTab === "single" && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-md"
                  layoutId="activeTabBackground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </TabsTrigger>
            <TabsTrigger
              value="bulk"
              className="relative z-10 text-base md:text-lg font-medium tracking-tight  transition-colors data-[state=active]:text-black px-4 py-3 gap-2"
            >
              <Users />
              Bulk Admission
              {activeTab === "bulk" && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-md"
                  layoutId="activeTabBackground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6 bg-gray-200 mt-6 shadow-md mx-6">
          <TabsContent
            value="single"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <motion.div
              key="single"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="text-center py-10">
                <p className="text-lg font-semibold text-gray-600">
                  Single Student Admission Form
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Upcoming - Under Development)
                </p>
              </div>
              {/* <SingleStudentForm /> */}
            </motion.div>
          </TabsContent>

          <TabsContent
            value="bulk"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <motion.div
              key="bulk"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="text-center py-10">
                <p className="text-lg font-semibold text-gray-600">
                  Bulk Student Admission Form
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Upcoming - Under Development)
                </p>
              </div>
              {/* <BulkStudentForm /> */}
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
